import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function Banner({data}) {
    const [first] = data
    const condition = data && data.length
    return condition && <div className="mt-4 px-4">
        <Link
            href={handleURL(first.url)}
        >
            <Image
                nextHandle={true}
                fill={false}
                src={first.image}
                alt={first.title}
                width={500}
                height={500}
                style={{width: "100%"}}
            />
        </Link>
    </div>
}