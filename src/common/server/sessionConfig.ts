import { IronSessionOptions } from "iron-session";
import * as msal from "@azure/msal-node";
import { NextApiHandler } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "msal-session",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const withSessionRoute = (handler: NextApiHandler) => {
  return withIronSessionApiRoute(handler, sessionOptions);
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
