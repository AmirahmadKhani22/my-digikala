import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'
import swipers from "../store"

export default function swiperType1Config({
    prefixSelector, 
    container, 
    spaceBetween=0,
    slidesPerView,
    ...others
}) {
    const temp = swipers[prefixSelector] = new Swiper(`${container}` , {
        slidesPerView,
        spaceBetween,
        ...others,
        modules: [Navigation],
        navigation: {
            nextEl: `.${prefixSelector}-swiper-button-next`,
            prevEl: `.${prefixSelector}-swiper-button-prev`,
        },
    })
    
    if(slidesPerView === "auto") {
        temp.slidesPerViewDynamic()
    }

    const prevEl = temp.navigation.prevEl
    const nextEl = temp.navigation.nextEl
    if(prevEl && nextEl) {
        if(temp.isBeginning) {
            nextEl.classList.remove("hidden")
        }
        temp.on("reachBeginning" , swiper => {
            prevEl.classList.add("hidden")
            nextEl.classList.remove("hidden")
        })
        temp.on("activeIndexChange" , swiper => {
            if(!temp.isBeginning) {
                prevEl.classList.remove("hidden")
            }
            if(!temp.isEnd) {
                nextEl.classList.remove("hidden")
            }
        })
        temp.on("reachEnd" , swiper => {
            nextEl.classList.add("hidden")
            prevEl.classList.remove("hidden")
        })
    }
    return temp
}

export function swiperType1Destroy(swiper) {
    swiper.destroy(true , false)
}
