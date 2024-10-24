import {useState} from "react"
import styles from "../hover.module.css"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Modal from "./modal"

export default function Categories() {
    const [showDetails , setShowDetails] = useState(false)
    const handleOnMouseEnter = event => {
        const timeout = setTimeout(() => {
            setShowDetails(true)
            clearTimeout(timeout)
        },200)
    }
    const handleOnMouseLeave = event => {
        setShowDetails(false)
        const timeout = setTimeout(() => {
            setShowDetails(false)
            clearTimeout(timeout)
        },200)
    }
    return <div 
        className="relative"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}    
    >
        <button className={`flex items-center gap-x-2 ${styles["on-hover-underline"]}`}>
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