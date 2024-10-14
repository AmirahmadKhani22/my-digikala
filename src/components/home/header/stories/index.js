import {useState , useEffect} from "react"
import {getJsonData} from "@/components/utils/components/hooks/getData"
import swiperType1Config from "@/components/sections/swiper/type-1/config"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import Slide from "./slide"

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
        const nowUTC = Date.now()
        return <div className="pt-4 m-auto w-full max-w-[1336px]">
            <SwiperType1Structure
                id="magnet-stories-slides"
                containerClassName=" w-full h-auto"
                prefixSelector="magnet-stories"
            >
                {stories.total.map((item , index) => <Slide key={index} item={item} now={nowUTC}/>)}
            </SwiperType1Structure>
        </div>
    } else {
        return stories
    }
}