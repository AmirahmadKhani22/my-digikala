import {useState} from 'react'
import ExtendedSearchBar from './extendedSearchbar'
import uniqueKey from '@/components/utils/generateRandomElementKey'
import AddSVGIcon from '@/components/utils/components/addSVGIcon'
import ModalBackground from '@/components/utils/components/modalBackground'

export default function Search({relatedSearchSlidesInfo}) {
    const [openModal , setOpenModal] = useState(false)
    // get searches history from local-storage
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    return <div 
        className="w-full relative z-0 rounded-lg"
        onClick={event => handleOpenModal()}
    >
        {openModal ? 
            <>
                <ExtendedSearchBar
                    data={relatedSearchSlidesInfo}
                    openModal={openModal}
                />
                {
                    createPortal(
                        <ModalBackground
                            backgrondClassName="bg-[rgba(0,0,0,0.5)]"
                            onClickCB={handleCloseModal}
                        />, 
                        document.body, 
                        uniqueKey()
                    )
                }
            </> :
            <div className="w-full h-11 py-3 px-5 bg-neutral-100 flex items-center gap-x-5 rounded-[inherit]">
                <AddSVGIcon
                    href="/symbol/magnify-glass-1.svg"
                    id="search-1"
                    className="size-6 cursor-pointer"
                />
                <p className="text-[var(--color-icon-low-empahsis)] text-xs cursor-text">جستجو</p>
            </div>
        }
    </div>
}