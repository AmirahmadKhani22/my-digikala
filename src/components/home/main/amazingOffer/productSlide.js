import ProductLink from "@/components/sections/productLink"

export default function ProductSlide({product,index,className="",style={}}) {
    return <div className="swiper-slide h-auto" style={{width:"auto"}}>
        <div 
            className={`${index === 0 ? "rounded-r-lg" : ""} ${className} p-2 bg-white h-full`}
            style={style}
        >
            <ProductLink 
                data={product} 
                imageSize={{width: 132 , height: 132}}    
                showTitle={true} 
            />
        </div>
    </div>
}