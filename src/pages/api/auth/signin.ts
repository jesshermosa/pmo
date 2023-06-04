import { NextApiRequest, NextApiResponse } from "next";
import { cryptoProvider, msalInstance } from "@/common/server/msalConfig";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  // Generate PKCE Codes before starting the authorization flow
  const { verifier, challenge } = await cryptoProvider.generatePkceCodes();

  const authCodeRequestParams = {
    /**
     * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: ["Files.ReadWrite", "Files.ReadWrite.All", "Sites.ReadWrite.All"],
  };

  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: cryptoProvider.createNewGuid(),
      authCodeRequest: {
        redirectUri: process.env.REDIRECT_URI,
        code: "",
        ...authCodeRequestParams,
      },
      pkceCodes: {
        challengeMethod: "S256",
        verifier: verifier,
        challenge: challenge,
      },
      redirectTo: "/",
    })
  );

  const authCodeUrlRequestParams = {
    state: state,
    scopes: ["Files.ReadWrite", "Files.ReadWrite.All", "Sites.ReadWrite.All"],
  };

  var authCodeUrlRequest: any = {
    redirectUri: process.env.REDIRECT_URI,
    responseMode: "form_post", // recommended for confidential clients
    codeChallenge: challenge,
    codeChallengeMethod: "S256",
    ...authCodeUrlRequestParams,
  };

  // Get url to sign user in and consent to scopes needed for application
  try {
    const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(
      authCodeUrlRequest
    );
    res.redirect(authCodeUrlResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
