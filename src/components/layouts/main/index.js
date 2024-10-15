import Navbar from '@/components/sections/nav'
import Footer from '@/components/sections/footer'

export default function MainLayout({children}) {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}