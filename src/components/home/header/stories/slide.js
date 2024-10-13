// import {useState} from "react"
import styles from "./styles.module.css"
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
            <div className={`w-full h-[84px] relative rounded-full p-0.5 ${styles["stories-image-border"]}`}>
                <Image
                    nextHandle={true}
                    fill={false}
                    // src={item.circle_cover}
                    // alt={item.title}
                    className={`rounded-[inherit] m-auto w-full h-full object-cover ${styles["stories-image"]}`}
                />
                {
                    item["badge_text"] && <div className="w- h- px-1.5 absolute bottom-0 m-auto border bg-[#fdecf5] text">

                    </div>
                }
            </div>
            <p className={`mt-2 text-[11px] leading-6 text-center ${item.title.length > 25 ? "ellipsis-2" : ""}`}>
                {item.title}
            </p>
        </div>
        {/* {showVideo && <VideoModal closeModal={closeModal}/>} */}
    </div>
}