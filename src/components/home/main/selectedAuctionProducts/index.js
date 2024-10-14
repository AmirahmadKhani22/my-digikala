import useData from "@/components/hooks/useData"
import ProductLink from "@/components/sections/productLink"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function SelectedAuctionProducts({identifier}) {
    const {data} = useData(identifier)
    const condition = data && data.products && data.products.length
    return condition && <div className="mt-4 px-3 border rounded-lg">
        <div className="my-8 flex items-center justify-center gap-x-2">
            <AddSVGIcon
                href="/symbol/discount.svg"
                id="discount"
                className="size-6 fill-icon-primary"
            />
            <h2 className="text-xl font-bold">{data.title}</h2>
        </div>
        <div className="grid grid-cols-6">
            {
                data.products.map((product , index) => {
                    const length = data.products.length
                    let borderLeft = "border-l"
                    let borderTop = "border-t"
                    if(index < 6) {
                        borderTop = ""
                    }
                    if(index % 6 === 5) {
                        borderLeft = ""
                    }
                    return <ProductLink 
                        key={index}
                        data={product}
                        showTitle={false}
                        imageSize={{width: 150 , height: 150}}
                        containerClassName={`w-auto p-3 gap-y-3 ${borderLeft} ${borderTop}`}
                    />
                })
            }
        </div>
    </div>
}