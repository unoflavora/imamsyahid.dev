import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const isProduction = process.env.NODE_ENV === "production"; // redirect only in production
  const requestedHost = request.headers.get("X-Forwarded-Host");

  if (isProduction && requestedHost && !requestedHost.match(/imamsyahid.dev/)) {
    const host = `imamsyahid.dev`; // set your main domain

    const requestedPort = request.headers.get("X-Forwarded-Port");
    const requestedProto = request.headers.get("X-Forwarded-Proto");

    url.host = host;
    url.protocol = requestedProto || url.protocol;
    url.port = requestedPort || url.port;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
