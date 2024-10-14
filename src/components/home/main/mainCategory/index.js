import useData from "@/components/hooks/useData"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function MainCategory() {
    const {data} = useData("main_categories_grid")
    return data && !!data.length && <div className="mt-4 pt-6 pb-10 flex flex-col justify-center gap-y-10">
        <h2 className="text-center text-xl font-bold">
            {data.title}
        </h2>
        <div className="m-auto grid grid-cols-8 gap-x-2 gap-y-8">
            {
                data.categories.map((category , index) => {
                    return <Link
                        key={index}
                        href={handleURL(category.url)}
                        className="max-w-36 flex flex-col items-center"
                    >
                        <Image
                            nextHandle={true}
                            fill={false}
                            src={category.image}
                            alt={category.title}
                            width={100}
                            height={100}
                            style={{height:"auto"}}
                            className="inline-block"
                        />
                        <p className="mt-3 text-center text-xs font-bold ellipsis-2">{category.title}</p>
                    </Link>
                })
            }
        </div>
    </div>
}