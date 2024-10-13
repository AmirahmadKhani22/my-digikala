"use client"
import ContactsPhone from "./contactsPhone"
import BusinessFeatures from "./businessFeatures"
import Accessibilities from "./accessibilities"
import DownloadApp from "./downlaodApp"
import BusinessDiscription from './BusinessDiscription'
import Licenses from './licenses'
import Copyright from "./copyright"
import Services from "./services"

export default function Footer() {
    return <footer className="mt-16 pt-10 border-t">
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