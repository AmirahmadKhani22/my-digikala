import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Timer from "./timer"
import handleURL from "@/components/utils/handleURL"

export default function IncredibleOffer({link,initialTime,title,className="",style={}}) {
    return <div className="swiper-slide" style={{width:"auto"}}>
        <div 
            className={`${className} text-white text-center`}
            style={style}
        >
            <Link
                href={handleURL(link)}
                className="block flex flex-col gap-y-3 justify-between items-center"
            >
                <Image
                    nextHandle={false}
                    width={88}
                    height={88}
                    src="/image/amazing-offer.svg"
                    alt={title}
                    className="m-auto"
                />
                <Timer initialTime={initialTime}/>
                <Image
                    nextHandle={false}
                    width={80}
                    height={80}
                    src="/image/amazing.svg"
                    alt={title}
                    className="m-auto"
                />
                <p className="text-sm flex items-center">
                    مشاهده همه
                    <AddSVGIcon 
                        id="left-1"
                        href="/symbol/left-1.svg"
                        className="mr-0.5 size-3 fill-white"
                    />
                </p>
            </Link>
        </div>
    </div>
}