// import {useState} from "react"
import styles from "./home.module.css"
import Image from "@/components/utils/components/image"
// import VideoModal from "./videoModal"

export default function Slides({item}) {
    // const [showVideo , setShowVideo] = useState(false)
    // const openModal = event => {
    //     setShowVideo(true)
    // }
    // const closeModal = event => {
    //     setShowVideo(false)
    // }
    return <div 
            className="swiper-slide w-auto cursor-pointer"
            // onClick={openModal}        
        >
        <div className="w-[84px]">
            <div className={`w-full h-[84px] rounded-full p-0.5 ${styles["stories-image-border"]}`}>
                <Image
                    nextHandle={true}
                    fill={false}
                    src={item.circle_cover}
                    className={`rounded-[inherit] m-auto w-full h-full object-cover ${styles["stories-image"]}`}
                />
            </div>
            <p className={`mt-2 text-[11px] leading-6 text-center ${item.title.length > 25 ? "ellipsis-2" : ""}`}>
                {item.title}
            </p>
        </div>
        {/* {showVideo && <VideoModal closeModal={closeModal}/>} */}
    </div>
}