import {useState} from "react"
import {createPortal} from "react-dom"
import ModalBackground from "@/components/utils/components/modalBackground"
import uniqueKey from "@/components/utils/generateRandomElementKey"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import ModalBody from "./modalBody"
import ModalHeader from "./modalHeader"

export default function ShowMore({widgets}) {
    const [showMore , setShowMore] = useState(false)
    const services = widgets.data.filter((widget , index) => !widget["is_digikala_group_service"])
    const groupServices = widgets.data.filter((widget , index) => widget["is_digikala_group_service"] && widget.description)
    const handleShowMore = event => {
        setShowMore(true)
    }
    const handleHideMore = event => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            setShowMore(false)
        },150)
    }
    return <>
        <button onClick={handleShowMore}>
            <div className="size-[54px] p-3 rounded-full bg-neutral-100">
                <AddSVGIcon
                    href="/symbol/more-1.svg"
                    id="more-1"
                    className="w-full h-full fill-icon-low-emphasis"
                />
            </div>
            <p className="mt-2 px-3 text-xs/6 text-center">بیشتر</p>
        </button>
        {
            showMore && createPortal(
                <ModalBackground 
                    containerClassName="z-[9999]"
                    wrapperClassName="grid place-items-center"
                    backgrondClassName="bg-black opacity-30"
                    onClickCB={handleHideMore}
                >
                    <div 
                        className="flex flex-col border bg-white rounded-2xl w-[728px] min-w-[460px] max-w-[80vw] max-h-[80vh] overflow-y-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <ModalHeader closeOnClick={handleHideMore}/>
                        <ModalBody services={services} groupServices={groupServices}/>
                    </div>
                </ModalBackground>,
                document.body,
                uniqueKey()
            )
        }
    </>
}