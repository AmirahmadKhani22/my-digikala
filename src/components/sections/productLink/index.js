import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import {persianNumSeperator} from "@/components/utils/persianNum"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function ProductLink({data , containerClassName="" , imageSize={} , showTitle}) {
    const url = data.url
    const variant = data["default_variant"]
    const {price} = variant
    return <Link
        href={handleURL(url)}
        className={`h-full flex flex-col justify-center ${containerClassName}
        `}
    >
        <div>
            <Image
                nextHandle={true}
                fill={false}
                src={data.images.main.url[0]}
                alt={data["title_fa"]}
                width={imageSize.width}
                height={imageSize.height}
                style={{...imageSize}}
                className="m-auto"
            />
        </div>
        {
            showTitle && <h3 className="h-10 my-2 text-neutral-600 ellipsis-2 text-xs leading-[20px]">
                {data["title_fa"]}
            </h3>
        }
        {
            price && <>
                <div className="flex justify-between items-center">
                    <span className={`bg-hint-object-error px-2 pt-1 text-xs text-white rounded-full`}>
                        {`${persianNumSeperator(price["discount_percent"])}%`}
                    </span>
                    <div className="flex gap-x-1 items-center">
                        <span className="pt-1">
                            {persianNumSeperator(price["selling_price"]/10)}
                        </span>
                        <AddSVGIcon 
                            href="/symbol/toman-1.svg"
                            id="toman-1"
                            className="size-4 fill-icon-high-emphasis"
                        />
                    </div>
                </div>
                <del className="block pl-5 pb-2 text-left text-xs text-neutral-300">
                    {persianNumSeperator(price["rrp_price"]/10)}
                </del>
            </>
        }
    </Link>
}