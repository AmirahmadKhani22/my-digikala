import styles from "./style.module.css"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Type1Navigation({
    prefixSelector, 
    containerClassName="",
    iconClassName=null,
}) {
    const containerClass = `${styles["type-1-swiper-button"]} absolute z-[2] p-2 bg-white border rounded-full cursor-pointer ${containerClassName} hidden hover:text-neutral-200`
    const iconsClassName = "block size-6 p-1 fill-icon-low-emphasis [transition:0.2s] hover:fill-icon-high-emphasis"
    return <>
        <div 
            className={`${prefixSelector}-swiper-button-next ${containerClass} right-auto left-3`}
        >
            <AddSVGIcon 
                href="/symbol/left-1.svg"
                id="left-1"
                className={`${iconsClassName} ${iconClassName ? iconClassName.next : ""}`}
            />
        </div>
        <div 
            className={`${prefixSelector}-swiper-button-prev ${containerClass} right-3 left-auto`}
        >
            <AddSVGIcon
                href="/symbol/right-1.svg"
                id="right-1"
                className={`${iconsClassName} ${iconClassName ? iconClassName.prev : ""}`}
            />
        </div>
    </>
}