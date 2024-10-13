import SwiperType2Navigation from "./navigation"
import SwiperType2Pagination from "./pagination"

export default function Type2Structure({
    id, 
    prefixSelector, 
    containerClassName="", 
    wrapperClassName="",
    navigationContainerClassName="",
    paginationContainerClassName="",
    children=null
}) {
    return <div
        id={`${id}`}
        className={`swiper ${containerClassName}`}
    >
        <div className={`swiper-wrapper ${wrapperClassName}`}>
            {children}
        </div>
        <SwiperType2Navigation 
            prefixSelector={prefixSelector}
            containerClassName={navigationContainerClassName}
        />
        <SwiperType2Pagination 
            prefixSelector={prefixSelector}
            containerClassName={paginationContainerClassName}
        />    
    </div>
}