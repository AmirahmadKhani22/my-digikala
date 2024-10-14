import styles from "./style.module.css"
import {useEffect} from "react"
import useData from "@/components/hooks/useData"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import swiperType1Config from "@/components/sections/swiper/type-1/config"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"
import orderingData from "./orderingData"
import Image from "@/components/utils/components/image"
import {englishNumToPersianNum}  from "@/components/utils/persianNum"

export default function HotProducts({identifier , prefixSelector}) {
    const {data} = useData(identifier)
    useEffect(() => {
        const swiper = swiperType1Config({
            container: `#${prefixSelector}-swiper-slides`,
            prefixSelector,
            slidesPerView: 4,
            spaceBetween: 20
        })
    })
    return data && !!data.length && <div className="mt-4 relative px-4 py-6 border rounded-2xl">
        {data["see_more_url"] && <Link
            href={handleURL(data["see_more_url"])}
            className="absolute left-4 top-5 text-sm font-bold text-cyan-500"
        >مشاهده همه</Link>}
        <div className="mb-7 flex items-center justify-center gap-x-2">
            <AddSVGIcon
                href="/symbol/search-trend.svg" 
                id="search-trend"
                className="size-6 fill-icon-warning"
            />
            <h2 className="text-xl font-bold">{data.title}</h2>
        </div>
        <SwiperType1Structure
            id={`${prefixSelector}-swiper-slides`}
            prefixSelector={prefixSelector}
        >
            {
                orderingData(data.products,3).map((pack , packIndex) => {
                    return <div 
                        key={packIndex} 
                        className="swiper-slide"
                        style={{width: "auto"}}
                    >
                        {
                            pack.map((product , productIndex) => {
                                const condition = productIndex < pack.length - 1
                                return <Link 
                                    key={data.products.length * pack.length + productIndex}
                                    href={handleURL(product.url)}
                                    className={`flex items-center gap-x-3 ${condition ? "mb-4" : ""}`}
                                >
                                    <Image 
                                        nextHandle={true}
                                        fill={false}
                                        src={product.images.main.url[0]}
                                        alt={product["title_fa"]}
                                        width={300}
                                        height={300}
                                        style={{width: "86px"}}
                                        className="shrink-0"
                                    />
                                    <span 
                                        className="w-8 text-4xl text-center text-secondary-500 font-bold"
                                    >{englishNumToPersianNum(productIndex + (packIndex * 3) + 1)}</span>
                                    <div className={`${condition ? styles["outline-bottom"] : ""}`}>
                                        <p className={`text-xs leading-7 text-neutral-700 ellipsis-2`}>{product["title_fa"]}</p>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                })
            }
        </SwiperType1Structure>
    </div>
}