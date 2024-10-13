"use client"
import styles from "./style.module.css"
import data from "./data.json"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Wrapper() {
    return <div className={`flex items-center justify-between px-4 py-3 rounded-2xl ${styles["background"]}`}>
        <Link
            href="/digiclub"
            className="mr-6"
        >
            <Image
                nextHandle={false}
                src="/image/digiclub-logo-white.svg"
                alt="دیجی کلاب"
                width={120}
                height={33}
            />
        </Link>
        <div className="flex items-center gap-x-1">
            {
                data.map((item , index) => {
                    let rounded = ""
                    if(index === 0) {
                        rounded = `rounded-r-lg`
                    }
                    if(index === data.length - 1) {
                        rounded = `rounded-l-lg`
                    }
                    const [_width , _height] = item.image.aspectRatio.split("/")
                    return <Link
                        key={index}
                        href={item.link.href}
                        className={`flex items-center justify-between pr-4 py-0.5 pl-0.5 bg-white ${rounded}`}
                    >
                        <div className="flex items-center gap-x-2">
                            <AddSVGIcon
                                href={item.icon.href}
                                id={item.icon.id}
                                className="size-5 fill-cyan-400"
                            />
                            <p className="text-xs">{item.text}</p>
                        </div>
                        <Image
                            nextHandle={true}
                            fill={false}
                            src={item.image.src}
                            alt={item.image.alt}
                            width={168}
                            height={60}
                            style={{width: "168px",height: "60px",objectFit: "cover"}}
                        />
                    </Link>
                })
            }
        </div>
    </div>
}