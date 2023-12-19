import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const authTokens = request.cookies.get("JWT")?.value;
  const isAdmin = request.cookies.get("ADMIN")?.value;

  if (request.nextUrl.pathname.includes("/admin") && !isAdmin) {
    // No autenticado
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("ADMIN");
    return response;
  }
  if (request.nextUrl.pathname.includes("/admin") && !authTokens) {
    // No autenticado
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("JWT");
    return response;
  }
  if (
    (request.nextUrl.pathname.includes("/login") && authTokens) ||
    (request.nextUrl.pathname.includes("/verify-account") && authTokens) ||
    (request.nextUrl.pathname.includes("/register") && authTokens) ||
    (request.nextUrl.pathname.includes("/forgot-password") && authTokens) ||
    (request.nextUrl.pathname.includes("/reset-password") && authTokens)
  ) {
    // autenticado
    const response = NextResponse.redirect(new URL("/", request.url));
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/admin/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify-account/:id",
  ],
};
