import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/registration/national/national-offline')) {
    return NextResponse.redirect(new URL('/registration/national/national-online', request.url))
  }
}
 
export const config = {
  matcher: '/registration/:path*',
}