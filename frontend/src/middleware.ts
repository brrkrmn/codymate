import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = async (request: NextRequest) => {
  const session = await auth();
  const path = request.nextUrl.pathname;

  return NextResponse.next();
};
