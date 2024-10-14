import {useContext, useEffect} from "react"
import homePageData from "@/contexts/homePageData"
import styles from "./styles.module.css"
import swiperType1Config , {swiperType1Destroy} from "@/components/sections/swiper/type-1/config"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import IncredibleOffer from "./IncredibleOffer"
import ProductSlide from "./productSlide"
import SeeAll from "./seeAll"

export default function AmazingOffer() {
    const {data} = useContext(homePageData)
    useEffect(() => {
        const swiper = swiperType1Config({
            container: "#amazing-offer-swiper",
            prefixSelector: "amazing-offer",
            spaceBetween: 4,
            slidesPerView: "auto",
        })
        
    })
    const [widgets] = data.widgets.filter((widget , index) => widget.name === "incredible_offer_products_cart")
    if(widgets) {
        const seeMore = widgets.data["see_more_url"]
        widgets.data.timer = {
            hour: "24",
            minute: "0",
            second: "0"
        }
        const slideWidth = "160px"
        return <div className="pt-6 m-auto w-full max-w-[1336px]">
            <div className={`${styles["background"]} py-5 rounded-2xl`}>
                <SwiperType1Structure
                    id="amazing-offer-swiper"
                    prefixSelector="amazing-offer"
                    containerClassName="w-full h-auto"
                >
                    <IncredibleOffer 
                        link={seeMore} 
                        title={widgets.data.title} 
                        initialTime={widgets.data.timer}
                        style={{width: slideWidth}}
                    />
                    {
                        widgets.data.products.map((product , index) => <ProductSlide 
                            key={index} 
                            product={product} 
                            index={index} 
                            style={{width: slideWidth}}
                        />)
                    }
                    <SeeAll 
                        link={seeMore} 
                        style={{width: slideWidth}}
                    />
                </SwiperType1Structure>
            </div>
        </div>
    } else {
        return null
    }
}