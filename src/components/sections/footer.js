import ContactsPhone from "./footer/contactsPhone"
import BusinessFeatures from "./footer/businessFeatures"
import Accessibilities from "./footer/accessibilities"
import DownloadApp from "./footer/downlaodApp"
import BusinessDiscription from './footer/BusinessDiscription'
import Licenses from './footer/licenses'
import Copyright from "./footer/copyright"
import Services from "./footer/services"

export default function Footer() {
    return <footer className="pt-10 border-t">
        <div className="px-5">
            <div>
                <ContactsPhone />
            </div>
            <div className="my-12">
                <BusinessFeatures />
            </div>
            <div className="mb-9">
                <Accessibilities />
            </div>
            <div className="mb-3 px-2 border-b">
                <DownloadApp />
            </div>
            <div className="w-full py-8 border-b flex">
                <BusinessDiscription />
                <Licenses />
            </div>
            <div className="py-8">
                <Copyright />
            </div>
        </div>
        <Services />
    </footer>
}