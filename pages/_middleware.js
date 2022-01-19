import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  //Allow users if they are looking  for next auth session or token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //Redirect them to login screen if they dont have a token and if they are accessing page other than login

  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
