import {withAuth} from 'next-auth/middleware'


export default withAuth({
    // Matches the pages config in `[...nextauth]`
    pages: {
      signIn: '/',
    }
})

export const config={
    matcher:[
        "/dashboard/:path*",
        "/task/:path*",
        "/report-list/:path*",
        "/user-list/:path*",
        "/product-list/:path*",
        "/add-product/:path*",
        "/add-order/:path*",
        "/order-list/:path*",
        "/create-report/:path*",
        "/add-user/:path*",
        "/admin-list/:path*",
    ]
}