import {useState} from "react"
import styles from "../hover.module.css"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Modal from "./modal"

export default function Categories() {
    const [showDetails , setShowDetails] = useState(false)
    const handleOnMouseEnter = event => {
        setShowDetails(true)
    }
    const handleOnMouseLeave = event => {
        setShowDetails(false)
    }
    return <div className="relative">
        <button 
            className={`flex items-center gap-x-2 ${styles["on-hover-underline"]}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <AddSVGIcon 
                href="/symbol/hamburger-menu.svg"
                id="hamburger-menu"
                className="size-5 fill-icon-high-emphasis"
            />
            <span className="text-sm leading-4 font-bold text-icon-high-emphasis">دسته&zwnj;بندی کالاها</span>
        </button>
        {
            showDetails && <Modal />
        }
    </div>
}