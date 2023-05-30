import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { cryptoProvider } from "@/common/server/msalConfig";
import {
  redirectToAuthCodeUrl,
  sessionOptions,
} from "@/common/server/sessionConfig";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  req.session.csrfToken = cryptoProvider.createNewGuid();
  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: req.session.csrfToken,
      redirectTo: "/",
    })
  );

  const authCodeUrlRequestParams = {
    state: state,

    /**
     * By default, MSAL Node will add OIDC scopes to the auth code url request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: [],
  };

  const authCodeRequestParams = {
    /**
     * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: [],
  };

  return redirectToAuthCodeUrl(
    req,
    res,
    authCodeUrlRequestParams,
    authCodeRequestParams
  );
};

export default withIronSessionApiRoute(handler, sessionOptions);
