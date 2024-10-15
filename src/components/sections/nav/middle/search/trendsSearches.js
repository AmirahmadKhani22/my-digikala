import {useEffect} from 'react'
import Link from '@/components/utils/components/link'
import swiperType1Config, {swiperType1Destroy} from '@/components/sections/swiper/type-1/config'
import SwiperType1Structure from '@/components/sections/swiper/type-1/structure'
import AddSVGIcon from '@/components/utils/components/addSVGIcon'
import handleURL from '@/components/utils/handleURL'

export default function TrendsSearches({data , openModal}) {
    useEffect(() => {
        if(openModal) {
            const swiper = swiperType1Config({
                prefixSelector: "nav-related-searches", 
                container: "#nav-related-searches-swiper-slides",
                slidesPerView: "auto",
            })
            return () => {
                swiperType1Destroy(swiper)
            }
        }
    })
    const condition = data && !!data.length
    return <div className="w-full border-b">
        <div className="px-4 flex items-center gap-x-3">
            <AddSVGIcon
                href="/symbol/search-trend.svg"
                id="search-trend"
                className="size-6 fill-icon-low-emphasis"
            />
            <p>جستجو&zwnj;های پرطرفدار</p>
        </div>
        {
            condition && <div className="my-4 w-full">
                <SwiperType1Structure
                    id="nav-related-searches-swiper-slides"
                    prefixSelector="nav-related-searches"
                    containerClassName="w-full h-auto pr-4 py-1"
                >
                    {
                        data.map((item , index) => (
                            <div key={index} className="swiper-slide w-auto">
                                <div className="flex gap-x-1 items-center w-fit pl-1 ml-2 py-2 pr-3 border rounded-full">
                                    <Link 
                                        href={handleURL(item.url)}
                                        className="cursor-text text-sm"
                                    >
                                        {item.keyword}
                                    </Link>
                                    <AddSVGIcon
                                        href="/symbol/left-1.svg"
                                        id="left-1"
                                        className="m-2 size-3 fill-icon-high-emphasis"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </SwiperType1Structure>
            </div>
        }
    </div>
}