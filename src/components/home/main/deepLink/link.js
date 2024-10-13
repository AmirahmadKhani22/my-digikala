import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import handleURL from "@/components/utils/handleURL"

export default function LinkItem({widget}) {
    return <div className="w-20 min-w-14">
        <Link
            href={handleURL(widget.url)}
            className="inline-block"
        >
            <Image
                nextHandle={true}
                fill={false}
                width={54}
                height={54}
                src={widget.icon.url[0]}
                alt={widget.title}
                style={{height:"auto"}}
                className="m-auto"
            />
            <p className="mt-2 px-3 text-xs/6 text-center">{widget.title}</p>
        </Link>
    </div>
}