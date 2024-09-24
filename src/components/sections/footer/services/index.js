import Image from "@/components/utils/image"
import services from "./data.json"

export default function Services() {
    return <div className="w-full bg-neutral-100">
        {
            services.map((section , index) => {
                return <div
                    key={index}
                    className={`${index ? "border-t-1" : ""} flex items-center`}
                >
                    {
                        section.map((service , index) => {
                            return <a 
                                key={index}
                                href={service.href}
                                className="flex-1 px-5 grid place-items-center"
                            >
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
                        })
                    }
                </div>
            })
        }
    </div>
}