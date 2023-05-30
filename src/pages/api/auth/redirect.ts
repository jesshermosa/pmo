import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { cryptoProvider, msalInstance } from "@/common/server/msalConfig";
import { sessionOptions } from "@/common/server/sessionConfig";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  if (_req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  if (_req.body.state) {
    const state = JSON.parse(cryptoProvider.base64Decode(_req.body.state));

    // check if csrfToken matches
    if (state.csrfToken === _req.session.csrfToken) {
      _req.session.authCodeRequest.code = _req.body.code; // authZ code
      _req.session.authCodeRequest.codeVerifier =
        _req.session.pkceCodes.verifier; // PKCE Code Verifier

      try {
        const tokenResponse = await msalInstance.acquireTokenByCode(
          _req.session.authCodeRequest
        );
        _req.session.accessToken = tokenResponse.accessToken;
        _req.session.idToken = tokenResponse.idToken;
        _req.session.account = tokenResponse.account;
        _req.session.isAuthenticated = true;

        res.redirect(state.redirectTo);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json(new Error("csrf token does not match"));
    }
  } else {
    res.status(500).json(new Error("state is missing"));
  }
};

export default withIronSessionApiRoute(handler, sessionOptions);
