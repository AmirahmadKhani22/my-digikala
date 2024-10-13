import {FaBasketShopping} from "react-icons/fa6"
import {LiaHeadsetSolid} from "react-icons/lia"

export default function PageAccessibilites() {
    return <>
        <div className="fixed z-[9999] bottom-8 left-4">
            <button className="rounded-full bg-fresh-700 text-white p-3 flex items-center">
                <p className="ml-2">سوپرمارکت</p>
                <FaBasketShopping 
                    size="24px"
                />
            </button>
        </div>
        <div className="fixed z-[9999] bottom-8 right-14">
            <button className="rounded-full bg-icon-primary text-white p-3">
                <LiaHeadsetSolid 
                    size="24px"
                />
            </button>
        </div>
    </>
}