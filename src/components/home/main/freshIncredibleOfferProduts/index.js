import style from "./style.module.css"
import useData from "@/components/hooks/useData"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"
import Info from "./info"
import Products from "./products"

export default function FreshIncredibleOfferProducts() {
    const {data} = useData("fresh_incredible_offer_products_circle")
    if(data && !!data.length) {
        const seeMore = handleURL(data["see_more_url"])
        return <div className={`mt-4 relative bg-neutral-100 ${style["background-pattern"]} rounded-2xl`}>
            <Link
                href={seeMore}
                className={`absolute inset-0 z-0 w-full h-full ${style["background-gradient"]} rounded-[inherit]`}
            />
            <div className="box-border min-h-28 w-full h-full flex items-center justify-between px-9 py-3.5 rounded-[inherit]">
                <Info data={data}/>
                <Products data={data} seeMore={seeMore} />
            </div>
        </div>
    } else {
        return null
    }
}