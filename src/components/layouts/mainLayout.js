import Nav from '../sections/nav'
import Footer from '../sections/footer'

export default function MainLayout({children}) {
    return <>
        <Nav />
        {children}
        <Footer />
    </>
}