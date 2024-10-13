export default function Type2Pagination({
    prefixSelector, 
    containerClassName="",
}) {
    return <div 
        className={`${prefixSelector}-swiper-pagination flex items-center justify-center absolute bottom-3 z-[2] w-full py-1 ${containerClassName}`}
    ></div>
}