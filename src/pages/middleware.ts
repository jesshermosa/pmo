// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import { sessionOptions } from "@/common/server/sessionConfig";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, { ...sessionOptions });
  await session.save();
  return res;
};

export const config = {
  matcher: "/",
};
