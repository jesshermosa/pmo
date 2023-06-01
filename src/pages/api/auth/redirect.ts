import { NextApiRequest, NextApiResponse } from "next";
import { cryptoProvider, msalInstance } from "@/common/server/msalConfig";
import { withSessionRoute } from "@/common/server/sessionConfig";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  if (req.body.state) {
    const state = JSON.parse(cryptoProvider.base64Decode(req.body.state));
    console.log("req.session.csrfToken", req.session);

    // check if csrfToken matches
    if (state.csrfToken === req.session.csrfToken) {
      req.session.authCodeRequest.code = req.body.code; // authZ code
      req.session.authCodeRequest.codeVerifier = req.session.pkceCodes.verifier; // PKCE Code Verifier

      try {
        const tokenResponse = await msalInstance.acquireTokenByCode(
          req.session.authCodeRequest
        );

        req.session.accessToken = tokenResponse.accessToken;
        req.session.idToken = tokenResponse.idToken;
        req.session.account = tokenResponse.account;
        req.session.isAuthenticated = true;

        await req.session.save();
        res.redirect(state.redirectTo);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json(new Error("csrf token does not match"));
      console.log("response", "csrf token does not match");
    }
  } else {
    res.status(500).json(new Error("state is missing"));
    console.log("response", "state is missing");
  }
};

export default withSessionRoute(handler);
