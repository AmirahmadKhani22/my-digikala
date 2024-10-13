import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import handleURL from "@/components/utils/handleURL"

export default function SeeAll({link,style={},className=""}) {
    return <div className="swiper-slide pl-5 h-auto" style={{width:"auto"}}>
        <div 
            className={`${className} h-full bg-white grid place-items-center rounded-l-lg`}
            style={style}
        >
            <Link
                href={handleURL(link)}
                className="grid place-items-center gap-y-4"
            >
                <div className="border-2 border-secondary-500 p-2 rounded-full">
                    <AddSVGIcon 
                        id="left-arrow-1"
                        href="/symbol/left-arrow-1.svg"
                        className="size-8 p-1 fill-secondary-500"
                    />
                </div>
                <p className="text-neutral-700">مشاهده همه</p>
            </Link>
        </div>
    </div>
}