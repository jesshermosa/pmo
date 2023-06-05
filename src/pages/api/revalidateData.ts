import { withSessionRoute } from "@/common/server/sessionConfig";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  if (!req.session.accessToken) {
    return res.redirect("/api/auth/signin");
  }

  try {
    await res.revalidate("/");
    return res.status(200).send("Success!");
  } catch (error: any) {
    console.error("revalidation error: ", error);
    return res.status(500).send(error.message);
  }
};

export default withSessionRoute(handler);
