import {useState , useEffect} from 'react'
import {createPortal} from 'react-dom'
import {FaMagnifyingGlass , FaFireFlameCurved} from "react-icons/fa6"
import Link from '@/components/utils/components/link'
import Type1Navigation , {Type1PrevNavigation} from '../../swiper/type-1/navigation'
import swiperType1Config, { swiperType1Destroy } from '../../swiper/type-1/config'
import uniqueKey from '@/components/utils/generateRandomElementKey'

export default function Search({relatedSearchSlidesInfo}) {
    const [openModal , setOpenModal] = useState(false)
    // get searches history from local-storage
    useEffect(() => {
        if(openModal) {
            const swiper = swiperType1Config({
                prefixSelector: "nav", 
                container: "#nav-related-searches-swiper",
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
        className="w-6/12 relative z-0 rounded-lg"
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
                        {relatedSearchSlidesInfo && <div className="my-4 w-full">
                            <div id="nav-related-searches-swiper" className="swiper w-full h-auto pr-4 py-1">
                                <div className="swiper-wrapper">
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
                                                    <Type1PrevNavigation />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Type1Navigation 
                                    prefixSelector="nav"
                                />
                            </div>
                        </div>}
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
            <div className="w-full h-full py-3 px-5 bg-neutral-100 flex items-center gap-x-5 rounded-[inherit]">
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