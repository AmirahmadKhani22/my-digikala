import Image from "@/components/utils/components/image"
import services from "./data.json"

export default function Services() {
    return <div className="w-full bg-neutral-100">
        {
            services.map((section , index) => {
                return <div
                    key={index}
                    className={`${index > 0 ? "border-t" : ""} h-20 flex items-center`}
                >
                    {
                        section.map((service , index) => {
                            return <div 
                                key={index}
                                className="border-l last:border-none h-full flex-1 px-5 grid place-items-center"
                            >
                                <a href={service.href}>
                                    <Image 
                                        nextHandle={false}
                                        src={service.logo.src}
                                        alt={service.logo.alt}
                                        style={{height: "20px" , width: "auto"}}
                                    />
                                </a>
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
}