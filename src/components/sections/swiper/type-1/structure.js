import Type1Navigation from "./navigation"

export default function SwiperType1Structure({
    id, 
    prefixSelector, 
    containerClassName="", 
    wrapperClassName="",
    children=null
}) {
    return <div
        id={`${id}`}
        className={`swiper ${containerClassName}`}
    >
        <div className={`swiper-wrapper ${wrapperClassName}`}>
            {children}
        </div>
        <Type1Navigation 
            prefixSelector={prefixSelector}
        />
    </div>
}