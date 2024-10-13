
import Image from "@/components/utils/components/image"
import licenses from "./data.json"

export default function Licenses() {
    return <ul className="basis-3/12 flex gap-x-2 justify-end">
        {
            licenses.map((license , index) => {
                return <li key={index}>
                    <a 
                        href={license.href}
                        className="inline-block p-4 border rounded-lg shrink-0"
                    >
                        <Image
                            nextHandle={true}
                            fill={false}
                            width={75}
                            height={75}
                            src={license.image.src}
                            alt={license.image.alt}
                            className="w-auto h-[75px]"
                        />
                    </a>
                </li>
            })
        }
    </ul>
}