"use client"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function Wrapper({categories , part}) {
    return <div className="flex items-center justify-between border rounded-2xl">
        {
            categories.map((category , categoryIndex) => {
                const partCount = 4
                const condition = (partCount * (part - 1) <= categoryIndex) && (categoryIndex < partCount * part)
                let borderLeft = "border-r"
                if(!(categoryIndex % partCount)) {
                    borderLeft = ""
                }
                return condition && <div
                    key={categoryIndex}
                    className={`flex-1 p-5 pt-3 pb-7 ${borderLeft}`}
                >
                    <div>
                        <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                        <small className="text-xs text-neutral-500">{category.description}</small>
                    </div>
                    <div className="my-4 grid grid-cols-2">
                        {
                            category.products.map((item , itemIndex) => {
                                const rowItemCount = 2 
                                let itemBorderRight = "border-r"
                                let itemBorderTop = "border-t"
                                if(!(itemIndex % rowItemCount)) {
                                    itemBorderRight = ""
                                }
                                if(itemIndex < rowItemCount) {
                                    itemBorderTop = ""
                                }
                                return <Link
                                    key={categoryIndex + itemIndex}
                                    href={handleURL(item.url)}
                                    className={`${itemBorderRight} ${itemBorderTop}`}
                                >
                                    <Image 
                                        key={partCount * part + categoryIndex * itemIndex + 1}
                                        nextHandle={true}
                                        fill={false}
                                        src={item.images.main.url[0]}
                                        alt={item["title_fa"]}
                                        width={130}
                                        height={130}
                                        style={{width: 130 , height: 130}}
                                        className="my-3 mx-auto"
                                    />
                                </Link>
                            })
                        }
                    </div>
                    <Link
                        href={handleURL(category.url)}
                        className="flex items-center justify-center gap-x-1 text-cyan-500"
                    >
                        <span className="text-xs">مشاهده</span>
                        <AddSVGIcon
                            href="/symbol/left-1.svg"
                            id="left-1"
                            className="size-2.5 fill-cyan-500"
                        />
                    </Link>
                </div>
            })
        }
    </div>
}