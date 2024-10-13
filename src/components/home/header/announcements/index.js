import {useContext, useEffect} from "react"
import SwiperType2Structure from "@/components/sections/swiper/type-2/structure"
import homePageData from "@/contexts/homePageData"
import swiperType2Config, { swiperType1Destroy } from "@/components/sections/swiper/type-2/config"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import styles from "@/components/sections/swiper/type-2/style.module.css"
import handleURL from "@/components/utils/handleURL"

export default function Announcement() {
    const {data} = useContext(homePageData)
    useEffect(() => {
        const swiper = swiperType2Config({
            container: "#announcement-swiper-slider",
            prefixSelector: "announcement",
            slidesPerView: 1,
        })
        
    })
    const [widget] = data.widgets.filter(widget => widget.name === "banners_home_web_zone_slider_new_v2")
    return <div className="w-full">
        <SwiperType2Structure
            id="announcement-swiper-slider"
            prefixSelector="announcement"
            containerClassName={`${styles["show-hide-swiper-navigation-parent"]} pt-4 w-full min-h-[400px]`}
            navigationContainerClassName={styles["show-hide-swiper-navigation-child"]}
        >
            {
                widget.data.map((widget , index) => <div
                    key={index}
                    className="swiper-slide"
                >
                    <Link
                        href={handleURL(widget.url)}
                        className="block relative h-[400px]"
                    >
                        <Image 
                            nextHandle={true}
                            src={widget.image}
                            alt={widget.title}
                            fill={true}
                            sizes="100vw"
                            loading={undefined}
                            priority={index <= 1}
                            unoptimized={widget.image.search(/\.gif/) > -1}
                        />
                    </Link>
                </div>)
            }
        </SwiperType2Structure>
    </div>
}