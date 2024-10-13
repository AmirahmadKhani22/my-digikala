import Link from "@/components/utils/components/link"
import Image from "@/components/utils/components/image"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import handleURL from "@/components/utils/handleURL"
import {persianNumSeperator} from "@/components/utils/persianNum"

export default function Products({data,seeMore}) {
    return <div className="relative flex items-center gap-x-2">
        {
            data.products.map((product , index) => <Link
                key={index}
                href={handleURL(product.url)}
                className="shrink-0 block m-auto p-2 relative bg-white rounded-full"
            >
                <Image
                    nextHandle={true}
                    fill={false}
                    src={product.images.main.url[0]}
                    alt={product["title_fa"]}
                    width={58}
                    height={58}
                    className="rounded-full"
                />
                <p className="absolute right-[-8px] bottom-[0] pt-1 px-1.5 bg-hint-object-error text-xs text-white rounded-full">
                    {`${persianNumSeperator(product["default_variant"].price["discount_percent"])}%`}
                </p>
            </Link>)
        }
        <Link
            href={seeMore}
            className="shrink-0 flex items-center gap-x-2 py-3 px-5 bg-white rounded-full"
        >
            <p className="text-fresh-700 text-sm">بیش از {persianNumSeperator(data["products_count"])} کالا</p>
            <AddSVGIcon 
                href="/symbol/left-arrow-1.svg"
                id="left-arrow-1"
                className="size-4 fill-fresh-700"
            />
        </Link>
    </div>
}