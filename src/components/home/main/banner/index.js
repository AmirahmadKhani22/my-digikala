import useData from "@/components/hooks/useData"
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function MainBanners({identifier,aspectRatio}) {
    const {data} = useData(identifier)
    return <div className={`mt-4 flex items-center gap-4 flex-wrap`}>
        {
            data.map((item , index) => <Link 
                key={index}
                href={handleURL(item.url)}
                className="block relative flex-1"
            >
                <Image
                    nextHandle={true}
                    fill={false}
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000/aspectRatio}
                    style={{width: "100%",height: "unset"}}
                    unoptimized={/.gif/.test(item.image)}
                    className="m-auto rounded-2xl"
                />
            </Link>)
        }
    </div>
}