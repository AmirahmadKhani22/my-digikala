import Link from "@/components/utils/link"
import data from "./data.json"
import NotifEmail from "./contacts/notifEmail"
import SocialMedias from "./contacts/socialMedias"

export default function Accessibilities() {
    return <div className="w-full flex justify-between">
        {
            data.map((section , index) => {
                return <div key={index}>
                    <h6 className="font-bold mb-5">{section.title}</h6>
                    <ul>
                        {
                            section.items.map((item , index) => {
                                return <li key={index}>
                                    <Link 
                                        href={item.link}
                                        className="block mb-4 text-sm text-neutral-500"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            })
        }
        <div>
            <SocialMedias />
            <NotifEmail />
        </div>
    </div>
}