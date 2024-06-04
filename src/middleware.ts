import { NextRequest, NextResponse } from "next/server";


export default function middleware(req: NextRequest, res: NextResponse) {
    const { url } = req
    if(url.includes('/'))  {
        return NextResponse.redirect(new URL('/dashboard', url))
    }
    return 

}

export const config = {
    matcher: '//'
}