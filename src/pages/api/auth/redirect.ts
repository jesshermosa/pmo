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

    var authCodeRequest = state.authCodeRequest;
    authCodeRequest.code = req.body.code; // authZ code
    authCodeRequest.codeVerifier = state.pkceCodes.verifier; // PKCE Code Verifier

    try {
      const tokenResponse = await msalInstance.acquireTokenByCode(
        authCodeRequest
      );

      req.session.accessToken = tokenResponse.accessToken;
      await req.session.save();
      res.redirect(state.redirectTo);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json(new Error("state is missing"));
  }
};

export default withSessionRoute(handler);
