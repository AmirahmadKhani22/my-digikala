import {useState , useEffect} from 'react'
import Modal from '@mui/material/Modal'
import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'
import {FaMagnifyingGlass , FaFireFlameCurved} from "react-icons/fa6"
import {GrFormPrevious , GrFormNext} from "react-icons/gr"
import Link from '@/components/utils/link'

export default function Search({relatedSearchSlidesInfo}) {
    const [openModal , setOpenModal] = useState(false)
    // get searches history from local-storage
    useEffect(() => {
        if(openModal) {
            const swiper = new Swiper("#nav-related-searches-swiper" , {
                slidesPreView: "auto",
                breakpoints: {
                    1024: {
                        slidesPerView: "auto",
                    }
                },
                modules: [Navigation],
                navigation: {
                    nextEl: ".nav-swiper-button-next",
                    prevEl: ".nav-swiper-button-prev",
                },
            })
            swiper.slidesPerViewDynamic()

            const prevEl = swiper.navigation.prevEl
            const nextEl = swiper.navigation.nextEl
            if(swiper.isBeginning) {
                nextEl.classList.remove("hidden")
            }
            swiper.on("reachBeginning" , swiper => {
                prevEl.classList.add("hidden")
                nextEl.classList.remove("hidden")
            })
            swiper.on("reachEnd" , swiper => {
                nextEl.classList.add("hidden")
                prevEl.classList.remove("hidden")
            })
            return () => {
                swiper.destroy(true , false)
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
                    className="absolute z-2 overflow-x-hidden overflow-y-auto bg-white py-5 rounded-[inherit] shadow-md"
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
                            <div id="nav-related-searches-swiper" className="swiper w-full h-auto pr-4">
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
                                                    <GrFormPrevious 
                                                        size="16px"
                                                        className="shrink-0"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="nav-swiper-button-next nav-swiper-button left-3 right-auto hidden">
                                    <GrFormPrevious 
                                        size="24px"
                                        className="nav-swiper-button-icon"
                                    />
                                </div>
                                <div className="nav-swiper-button-prev nav-swiper-button right-3 left-auto hidden">
                                    <GrFormNext 
                                        size="24px"
                                        className="nav-swiper-button-icon"
                                    />    
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>                
                <Modal open={openModal} onClose={handleCloseModal}><></></Modal>
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