import {renderToString} from "react-dom/server"
import Swiper from 'swiper'
import {Navigation , Pagination , Autoplay} from 'swiper/modules'
import styles from "./style.module.css"
import swipers from "../store"

export default function swiperType2Config({
    prefixSelector, 
    container, 
    spaceBetween=0,
    slidesPerView,
    ...others
}) {
    const temp = swipers[prefixSelector] = new Swiper(`${container}` , {
        slidesPerView,
        spaceBetween,
        loop: true,
        autoplay: {
            delay: 4050,
            disableOnInteraction: false,
        },
        ...others,
        modules: [Autoplay , Navigation , Pagination],
        navigation: {
            nextEl: `.${prefixSelector}-swiper-button-next`,
            prevEl: `.${prefixSelector}-swiper-button-prev`,
        },
        pagination: {
            el: `.${prefixSelector}-swiper-pagination`,
            type: "bullets",
            bulletClass: `${prefixSelector}-swiper-pagination-bullet`,
            bulletActiveClass: `${prefixSelector}-swiper-pagination-bullet-active ${styles["active-bullet"]}`,
            renderBullet: (index , className) => {
                return renderToString(<div
                    className={`${className} size-1 mx-1 rounded-full bg-neutral-900 opacity-30 shrink-0 [transition:0.3s]`}
                ></div>)
            }
        },
    })
    temp.slidesPerViewDynamic()
    return temp
}

export function swiperType2Destroy(swiper) {
    swiper.destroy(true , false)
}
