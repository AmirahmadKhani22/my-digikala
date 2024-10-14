import useData from "@/components/hooks/useData"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function MainCategory() {
    const {data} = useData("main_categories_grid")
    const condition = data && data.categories && !!data.categories.length
    return condition && <div className="mt-4 pt-6 pb-10 flex flex-col justify-center gap-y-10">
        <h2 className="text-center text-xl font-bold">
            {data.title}
        </h2>
        <div className="m-auto grid grid-cols-8 gap-x-2 gap-y-8">
            {
                data.categories.map((category , index) => {
                    return <Link
                        key={index}
                        href={handleURL(category.url)}
                        className="max-w-36 flex flex-col items-center px-4"
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
                        <p className="mt-3 text-center text-xs font-bold leading-7 ellipsis-2">{category.title}</p>
                    </Link>
                })
            }
        </div>
    </div>
}