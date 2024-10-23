import {createPortal} from "react-dom"
import BackgroundModal from "@/components/utils/components/modalBackground"
import uniqueKey from "@/components/utils/generateRandomElementKey"

export default function Modal() {
    return <>
        <div className="absolute right-0 top-[calc(100%+15px-2px)] z-[-1] w-auto h-[85vh] bg-white rounded-b-lg border shadow-sm">
            
        </div>
        {
            createPortal(
                <BackgroundModal 
                    containerClassName="z-[999]"
                    backgrondClassName="bg-[rgba(0,0,0,0.35)]"
                />,
                document.body,
                uniqueKey()
            )
        }
    </>
}