import data from "./socialMediaData.json"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function SocialMedias() {
    return <div className="mb-10">
        <h6 className="font-bold mb-5">همراه ما باشید!</h6>
        <div className="flex gap-x-10">
            {
                data.map((item , index) => {
                    return <a
                        key={index}
                        href={item.link.href}
                        className="inline-block sherink-0"
                    >
                        <AddSVGIcon 
                            title={item.icon.title}
                            href={item.icon.href}
                            id={item.icon.id}
                            className="size-8 fill-neutral-400"
                        />
                    </a>
                })
            }
        </div>
    </div>
} 