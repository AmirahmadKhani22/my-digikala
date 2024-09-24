import Image from "@/components/utils/image"
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
                                        nextHandle={true}
                                        unoptimized={true}
                                        fill={false}
                                        height={20}
                                        width={70}
                                        imageClassName="w-auto h-5"
                                        src={service.logo.src}
                                        alt={service.logo.alt}
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