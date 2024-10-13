import {useEffect} from "react"
import useData from "@/components/hooks/useData"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import swiperType1Config , {swiperType1Destroy} from "@/components/sections/swiper/type-1/config"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"
import Image from "@/components/utils/components/image"

export default function PopularBrands() {
    const {data} = useData("popular_brands_horizontal")
    useEffect(() => {
        const swiper = swiperType1Config({
            container: "#popular-brands-swiper-slides",
            prefixSelector: "popular-brands",
            slidesPerView: "auto",
        })
        
    })
    return <div className="mt-4 py-5 border rounded-2xl">
        <div className="m-auto pb-5 flex items-center justify-center gap-x-3">
            <AddSVGIcon
                href="/symbol/top-brands.svg"
                id="top-brands"
                className="size-6 fill-icon-rating-0-2"
            />
            <h3 className="text-xl font-semibold">{data.title}</h3>
        </div>
        <SwiperType1Structure
            id="popular-brands-swiper-slides"
            prefixSelector="popular-brands"
            containerClassName="w-full"
        >
            {
                data.brands.map((brand , index) => {
                    const length = data.brands.length
                    let borderLeft = "border-l"
                    if(index === length - 1) {
                        borderLeft = ""
                    }
                    return brand.visibility && <div 
                        key={index} 
                        className="swiper-slide h-auto"
                        style={{width: "auto"}}
                    >
                        <Link
                            href={handleURL(brand.url)}
                            className={`h-full flex items-center justify-center px-4 ${borderLeft}`}
                        >
                            <Image
                                nextHandle={true}
                                fill={false}
                                src={brand.logo.url[0]}
                                alt={brand["title_fa"]}
                                width={110}
                                height={110}
                                style={{height: "auto"}}
                            />
                        </Link>
                    </div>
                })
            }
        </SwiperType1Structure>
    </div>
} 