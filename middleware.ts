import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// SSR
// cookie 접근이 가능
// CSR
// cookie HttpOnly 옵션인 상태에서 접근이 불가능
export function middleware(request: NextRequest) {
    const refreshToken = request.cookies.get("refresh_token")
    const { pathname } = request.nextUrl;

    // [로그인 전용 경로 차단]
    if(!refreshToken && (
        pathname.startsWith("/my-page")
        )
    ){
        return NextResponse.redirect(new URL("/login", request.url))
    }

    // [비로그인 전용 경로 차단]
    if(refreshToken && (
        pathname.startsWith("/login") || 
        pathname.startsWith("/join")
    )){
        return NextResponse.redirect(new URL("/", request.url)) 
    }

    return NextResponse.next()
}

// 미들웨어 라우트 추가
export const config = {
    matcher: ["/login", "/join", "/my-page/:path*"]
}