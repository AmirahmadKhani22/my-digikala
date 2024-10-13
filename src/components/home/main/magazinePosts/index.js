import useData from "@/components/hooks/useData"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function MagazinePosts() {
    const {data} = useData("magazine_posts")
    return <div className="mt-4">
        <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-base font-bold">خواندنی&zwnj;ها</h2>
            <Link
                href={data["see_more_url"]}
                className="flex items-center gap-x-1 text-xs text-cyan-400 font-bold"
            >
                <span>مطالب بیشتر در دیجی&zwnj;کالا مگ</span>
                <AddSVGIcon
                    href="/symbol/left-1.svg"
                    id="left-1"
                    className="size-2.5 fill-cyan-400"
                />
            </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-2">
            {
                data.news.map((item , index) => {
                    return index < 4 && <Link 
                        key={index}
                        href={handleURL(item.url)}
                        className="flex flex-col h-auto border rounded-lg"
                    >
                        <Image
                            nextHandle={true}
                            fill={false}
                            src={item.image}
                            alt={item["category_title"]}
                            width={300}
                            height={300}
                            style={{width:"100%"}}
                            className="rounded-t-[inherit]"
                        />
                        <p className="w-full py-3 px-4 text-xs leading-6">{item.title}</p>
                    </Link>
                })
            }
        </div>
    </div>
}