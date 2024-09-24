import Main from './nav/main'
import Details from './nav/details'
import Banner from './banner'

export default function Nav() {
    return <nav className="p-4 w-full relative z-[9999] bg-white shadow">
        <Banner />
        <Main />
        <Details />
    </nav>
}