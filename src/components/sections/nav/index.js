import Banner from '../banner'
import Middle from './middle'
import Details from './details'

export default function Nav() {
    return <nav className="p-4 w-full relative z-[9999] bg-white shadow">
        <Banner />
        <Middle />
        <Details />
    </nav>
}