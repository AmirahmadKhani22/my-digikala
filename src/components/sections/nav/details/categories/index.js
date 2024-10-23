import styles from "../hover.module.css"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Categories() {
    return <div className="relative">
        <button className={`flex items-center gap-x-2 ${styles["on-hover-underline"]}`}>
            <AddSVGIcon 
                href="/symbol/hamburger-menu.svg"
                id="hamburger-menu"
                className="size-5 fill-icon-high-emphasis"
            />
            <span className="text-sm leading-4 font-bold text-icon-high-emphasis">دسته&zwnj;بندی کالاها</span>
        </button>
        <div className="absolute">

        </div>
    </div>
}