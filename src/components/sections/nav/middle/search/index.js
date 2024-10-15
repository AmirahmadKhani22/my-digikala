import {useState , useEffect} from 'react'
import {FaMagnifyingGlass , FaFireFlameCurved} from "react-icons/fa6"
import Link from '@/components/utils/components/link'
import SwiperType1Structure from '@/components/sections/swiper/type-1/structure'
import swiperType1Config, {swiperType1Destroy} from '../../swiper/type-1/config'
import uniqueKey from '@/components/utils/generateRandomElementKey'
import AddSVGIcon from '@/components/utils/components/addSVGIcon'

export default function Search({relatedSearchSlidesInfo}) {
    const [openModal , setOpenModal] = useState(false)
    // get searches history from local-storage
    useEffect(() => {
        if(openModal) {
            const swiper = swiperType1Config({
                prefixSelector: "nav-related-searches", 
                container: "#nav-related-searches-swiper-slides",
                slidesPerView: "auto",
            })
            return () => {
                swiperType1Destroy(swiper)
            }
        }
    })
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    return <div 
        className="w-full relative z-0 rounded-lg"
        onClick={event => handleOpenModal()}
    >
        {openModal ? 
            <>
                <div 
                    className="absolute z-2 w-full h-auto border overflow-x-hidden overflow-y-auto bg-white py-5 rounded-[inherit] shadow-md"
                    onClick={event => event.stopPropagation()}
                >
                    <div className="mx-4 [border-bottom:1px_solid_var(--color-secondary-500)]">
                        <input 
                            type="search"
                            placeholder="جستجو"
                            className="px-3 w-full outline-none pb-3 text-xs"
                        />
                    </div>
                    <div className="px-4">
                        <picture className="px-4"></picture>
                    </div>
                    {/* searches history */}
                    {}
                    <div className="w-full border-b">
                        <div className="px-4 flex items-center gap-x-3">
                            <FaFireFlameCurved 
                                size="24px" 
                                color="var(--color-icon-low-empahsis)"
                                className="cursor-pointer"
                            />
                            <p>جستجو&zwnj;های پرطرفدار</p>
                        </div>
                        {
                            relatedSearchSlidesInfo && <div className="my-4 w-full">
                                <SwiperType1Structure
                                    id="nav-related-searches-swiper"
                                    prefixSelector="nav-related-searches"
                                    containerClassName="w-full h-auto pr-4 py-1"
                                >
                                    {
                                        relatedSearchSlidesInfo.map((info , index) => (
                                            <div key={index} className="swiper-slide w-auto">
                                                <div className="flex gap-x-2 items-center w-fit pl-1 ml-2 py-2 pr-3 border rounded-full">
                                                    <Link 
                                                        href={info.href}
                                                        className="cursor-text text-sm"
                                                    >
                                                        {info.text}
                                                    </Link>
                                                    <AddSVGIcon
                                                        href="/symbol/left-1.svg"
                                                        id="left-1"
                                                        className="size-6"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </SwiperType1Structure>
                            </div>
                        }
                    </div>
                </div>                
                {
                    createPortal(
                        <div 
                            className="absolute inset-0 z-[999] w-full h-screen bg-black opacity-45"
                            onClick={event => {
                                event.stopPropagation()
                                handleCloseModal()
                            }}
                        ></div>, 
                        document.body, 
                        uniqueKey()
                    )
                }
            </> :
            <div className="w-full h-11 py-3 px-5 bg-neutral-100 flex items-center gap-x-5 rounded-[inherit]">
                <FaMagnifyingGlass 
                    size="24px" 
                    color="var(--color-icon-low-empahsis)"
                    className="cursor-pointer"
                />
                <p className="text-[var(--color-icon-low-empahsis)] text-xs cursor-text">جستجو</p>
            </div>
        }
    </div>
}