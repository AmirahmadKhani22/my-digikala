import styles from "./style.module.css"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Type2Navigation({
    prefixSelector, 
    containerClassName="",
    buttonClassName="",
    iconClassName={},
}) {
    const containerClass = `${styles["type-2-swiper-button"]} p-2 bg-white border rounded-full cursor-pointer ${buttonClassName}`
    const iconsClassName = "block size-6 p-1 fill-icon-high-emphasis"
    return <div className={`absolute bottom-10 z-[2] right-8 left-auto flex flex-row-reverse gap-x-2 ${containerClassName}`}>
        <div 
            className={`${prefixSelector}-swiper-button-next ${containerClass}`}
        >
            <AddSVGIcon 
                href="/symbol/left-1.svg"
                id="left-1"
                className={`${iconsClassName} ${iconClassName?.next}`}
            />
        </div>
        <div 
            className={`${prefixSelector}-swiper-button-prev ${containerClass}`}
        >
            <AddSVGIcon 
                href="/symbol/right-1.svg"
                id="right-1"
                className={`${iconsClassName} ${iconClassName?.prev}`}
            />
        </div>
    </div>
}