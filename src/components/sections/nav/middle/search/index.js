import {useState} from 'react'
import {createPortal} from 'react-dom'
import ExtendedSearchBar from './extendedSearchbar'
import ModalBackground from '@/components/utils/components/modalBackground'
import uniqueKey from '@/components/utils/generateRandomElementKey'
import AddSVGIcon from '@/components/utils/components/addSVGIcon'

export default function Search() {
    const [openModal , setOpenModal] = useState(false)
    // get searches history from local-storage
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    return <div 
        className="xl:w-[600px] lg:w-2/4 relative z-0 rounded-lg"
        onClick={event => handleOpenModal()}
    >
        {openModal ? 
            <>
                <ExtendedSearchBar openModal={openModal} />
                {
                    createPortal(
                        <ModalBackground
                            backgrondClassName="z-20 bg-[rgba(0,0,0,0.5)]"
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
                    className="size-8 fill-icon-low-emphasis cursor-pointer"
                />
                <p className="text-[var(--color-icon-low-empahsis)] text-xs cursor-text">جستجو</p>
            </div>
        }
    </div>
}