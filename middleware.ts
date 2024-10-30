import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("authenticated")?.value === "true";

  // Redirect authenticated users trying to access the "/signin" page
  if (isAuthenticated && req.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticated && req.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog", "/", "/signin"] // Add "/signin" to the matcher list
};
