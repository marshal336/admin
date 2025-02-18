import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (url.pathname === '/') {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
