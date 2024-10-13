import {NextResponse as response} from "next/server"

export default function Middleware(requset) {
    console.log(requset.url)
    response.next()
}

export const config = {
    matcher: "/symbol/:path"
}
