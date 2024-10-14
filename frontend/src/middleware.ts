import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = async (request: NextRequest) => {
  const session = await auth();
  const path = request.nextUrl.pathname;

  if (session?.user && path === "login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/login", "/"],
};
