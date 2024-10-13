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
                    src={item.circle_cover}
                    alt={item.title}
                    width={115}
                    height={115}
                    className={`rounded-[inherit] m-auto w-full h-full object-cover ${styles["stories-image"]}`}
                />
                {
                    item["badge_text"] && <div className="flex justify-center w-full absolute bottom-[-11px]">
                        <span className="inline-block h-[22px] px-1.5 py-0.5 border border-white rounded bg-[#fdecf5] text-center text-xs text-[#e03e97]">
                            {
                                item["persian_calendar"]
                            }
                        </span>
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