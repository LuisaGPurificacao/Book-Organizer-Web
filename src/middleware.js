import { NextResponse } from 'next/server'

export function middleware(request) {
    if (!request.cookies.has('bookorganizer_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
        '/livros/:path*',
        '/categorias/:path*',
    ],
}