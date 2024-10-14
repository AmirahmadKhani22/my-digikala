import {useEffect} from "react"
import {createPortal} from "react-dom"
import ModalBackground from "@/components/utils/components/modalBackground"
import uniqueKey from "@/components/utils/generateRandomElementKey"
import SwiperType1Structure from "@/components/sections/swiper/type-1/structure"
import swiperType1Config from "@/components/sections/swiper/type-1/config"

export default function VideoModal({closeModal , item , index}) {
    useEffect(() => {
        const swiper = swiperType1Config({
            container: "magnet-stories-videos-slides",
            prefixSelector: "magnet-videos",
            slidesPerView: 1,
        })
        
    })
    return createPortal(
        <ModalBackground 
            className="bg-black opacity-75 z-[99999] py-3"
            onClickCB={closeModal}
        >
            <SwiperType1Structure
                id="magnet-stories-videos-slides"
                prefixSelector="magnet-videos"
                containerClassName="m-auto h-full w-5/12"
            >
                <div className="h-full w-10/12 bg-white">
                    <div>
                        <video></video>
                    </div>
                </div>
            </SwiperType1Structure>
        </ModalBackground>,
        document.body,
        uniqueKey()
    )
}