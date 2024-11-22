import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("authenticated")?.value;

  if (isAuthenticated && req.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isAuthenticated && req.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/mockexam", "/", "/signin","/api","/about","/history","/history/:deatil*",
    "/mockexam/chemistry","/mockexam/math","/mockexam/iq","/mockexam/physic","/exam"],
};