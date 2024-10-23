import {createPortal} from "react-dom"
import BackgroundModal from "@/components/utils/components/modalBackground"
import uniqueKey from "@/components/utils/generateRandomElementKey"

export default function Modal() {
    return <>
        <div className="absolute w-auto h-[85vh]">

        </div>
        {
            createPortal(
                <BackgroundModal 
                    containerClassName="z-[999]"
                    backgrondClassName="bg-[rgba(0,0,0,0.5)]"
                />,
                document.body,
                uniqueKey()
            )
        }
    </>
}