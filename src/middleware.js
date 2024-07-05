
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
const cookieMiddleware = async (request, next) => {

    const cookieStore = cookies()
    const path = request.path

    const token = cookieStore.get('token')?.value

    if (!token) {

        return NextResponse.redirect(new URL('/login', request.url))
    }
    else {
        return NextResponse.next()
    }



}
export default cookieMiddleware;