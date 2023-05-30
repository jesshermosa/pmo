import { cryptoProvider } from "@/common/server/msalConfig";
import {
  redirectToAuthCodeUrl,
  sessionOptions,
} from "@/common/server/sessionConfig";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  if (_req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  // create a GUID for csrf
  _req.session.csrfToken = cryptoProvider.createNewGuid();

  // encode the state param
  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: _req.session.csrfToken,
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

  // trigger the first leg of auth code flow
  return redirectToAuthCodeUrl(
    _req,
    res,
    authCodeUrlRequestParams,
    authCodeRequestParams
  );
};

export default withIronSessionApiRoute(handler, sessionOptions);
