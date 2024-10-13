import {useState , useEffect} from "react"
import {getJsonData} from "@/components/utils/components/hooks/getData"
import swiperType1Config , {swiperType1Destroy} from "@/components/sections/swiper/type-1/config"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import Slides from "./slide"

export default function Stories() {
    const [stories , setStories] = useState(null)
    useEffect(() => {
        if(stories) {
            const swiper = swiperType1Config({
                prefixSelector: "magnet-stories", 
                container: "#magnet-stories-slides",
                spaceBetween: 24,
                slidesPerView: "auto"
            })
            return () => {
                swiperType1Destroy(swiper)
            }
        }
    })
    useEffect(() => {
        getJsonData("/v1/magnet/home-page/")
        .then(res => setStories(res.data))
        .catch(console.log)
    },[])
    if(stories) {
        stories.total = stories.lives.concat(stories.posts)
        console.log("magnet-stories: " , stories.total)
        return <div className="pt-4 m-auto w-full max-w-[1336px]">
            <SwiperType1Structure
                id="magnet-stories-slides"
                containerClassName=" w-full h-auto"
                prefixSelector="magnet-stories"
            >
                {stories.total.map((item , index) => <Slides key={index} item={item}/>)}
            </SwiperType1Structure>
        </div>
    } else {
        return stories
    }
}