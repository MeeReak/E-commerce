import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value;
    const { pathname } = request.nextUrl;

    const publicPaths = ["/sign-in", "/sign-up"];

    if (!token && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (token && publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|static|favicon.ico|api).*)"]
};
