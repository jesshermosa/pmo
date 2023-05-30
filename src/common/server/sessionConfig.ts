import { IronSessionOptions } from "iron-session";
import * as msal from "@azure/msal-node";
import { NextApiRequest, NextApiResponse } from "next";
import { cryptoProvider, msalInstance } from "./msalConfig";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "msal-session",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    accessToken: string;
    idToken: string;
    account: msal.AccountInfo | null;
    isAuthenticated: boolean;
    csrfToken?: string;
    pkceCodes: any;
    authCodeUrlRequest: any;
    authCodeRequest: any;
  }
}

export async function redirectToAuthCodeUrl(
  req: NextApiRequest,
  res: NextApiResponse,
  authCodeUrlRequestParams: any,
  authCodeRequestParams: any
) {
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
    res.redirect(authCodeUrlResponse);
  } catch (error) {
    res.status(500).end();
  }
}
