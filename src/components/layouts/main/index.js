import Nav from '@/components/sections/nav'
import Footer from '@/components/sections/footer'

export default function MainLayout({children}) {
    return <>
        <Nav />
        {children}
        <Footer />
    </>
}