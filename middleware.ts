import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./config/routes";

export function middleware(request: NextRequest) {
	const isAuthenticated = request.cookies.has("token");
	const isAuthPage = request.nextUrl.pathname === routes.public.auth.signIn;

	if (
		!isAuthenticated &&
		request.nextUrl.pathname.startsWith(routes.private.dashboard.root)
	) {
		return NextResponse.redirect(
			new URL(routes.public.auth.signIn, request.url),
		);
	}

	if (isAuthenticated && isAuthPage) {
		return NextResponse.redirect(
			new URL(routes.private.dashboard.home, request.url),
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/iniciar-sesion"],
};
