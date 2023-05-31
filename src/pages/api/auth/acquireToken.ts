import { cryptoProvider, msalInstance } from "@/common/server/msalConfig";
import { sessionOptions } from "@/common/server/sessionConfig";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  // create a GUID for csrf
  req.session.csrfToken = cryptoProvider.createNewGuid();

  // encode the state param
  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: req.session.csrfToken,
      redirectTo: "/users/profile",
    })
  );

  const authCodeUrlRequestParams = {
    state: state,
    scopes: ["User.Read"],
  };

  const authCodeRequestParams = {
    scopes: ["User.Read"],
  };

  // Generate PKCE Codes before starting the authorization flow
  const { verifier, challenge } = await cryptoProvider.generatePkceCodes();

  // Set generated PKCE codes and method as session vars
  req.session.pkceCodes = {
    challengeMethod: "S256",
    verifier: verifier,
    challenge: challenge,
  };

  /**
   * By manipulating the request objects below before each request, we can obtain
   * auth artifacts with desired claims. For more information, visit:
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationurlrequest
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationcoderequest
   **/

  req.session.authCodeUrlRequest = {
    redirectUri: process.env.REDIRECT_URI,
    responseMode: "form_post", // recommended for confidential clients
    codeChallenge: req.session.pkceCodes.challenge,
    codeChallengeMethod: req.session.pkceCodes.challengeMethod,
    ...authCodeUrlRequestParams,
  };

  req.session.authCodeRequest = {
    redirectUri: process.env.REDIRECT_URI,
    code: "",
    ...authCodeRequestParams,
  };

  // Get url to sign user in and consent to scopes needed for application
  try {
    const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(
      req.session.authCodeUrlRequest
    );
    await req.session.save();
    res.redirect(authCodeUrlResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default withIronSessionApiRoute(handler, sessionOptions);
