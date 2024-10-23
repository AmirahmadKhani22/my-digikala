import {createPortal} from "react-dom"
import BackgroundModal from "@/components/utils/components/modalBackground"
import uniqueKey from "@/components/utils/generateRandomElementKey"

export default function Modal() {
    return <>
        <div className="absolute right-0 top-full z-[-1] w-auto h-[85vh] bg-white rounded-lg shadow-lg">

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