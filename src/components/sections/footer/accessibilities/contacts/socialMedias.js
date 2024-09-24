import {BsInstagram , BsTwitter , BsLinkedin} from "react-icons/bs"
import Aparat from "./aparat.svg"

export default function SocialMedias() {
    const ICONS_SIZE = "30px"
    const ICONS_COLOR = "text-neutral-400"
    return <div className="mb-10">
        <h6 className="font-bold mb-5">همراه ما باشید!</h6>
        <div className="flex gap-x-10">
            <a
                href="https://instagram.com/digikalcom"
                className=""
            >
                <BsInstagram 
                    title="instagram page"
                    size={ICONS_SIZE}
                    className={`${ICONS_COLOR}`}
                />
            </a>
            <a
                href="https://twitter.com/digikalcom"
                className=""
            >
                <BsTwitter
                    title="twitter page"
                    size={ICONS_SIZE}
                    className={`${ICONS_COLOR}`}
                />
            </a>
            <a
                href="https://linkedin.com/company/digikal/mycompany"
                className=""
            >
                <BsLinkedin 
                    title="linkedin page"
                    size={ICONS_SIZE}
                    className={`${ICONS_COLOR}`}
                />
            </a>
            <a
                href="https://aparat.com/digikal"
                className=""
            >
                <Aparat 
                    title="aparat page"
                    size={ICONS_SIZE}
                    className={`${ICONS_COLOR}`}
                />
            </a>
        </div>
    </div>
} 