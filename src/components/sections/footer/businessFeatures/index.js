import features from './data.json'
import Link from "@/components/utils/components/link"
import Image from "@/components/utils/components/image"

export default function BusinessFeatures() {
    return <ul className="flex items-center justify-around w-full">
        {
            features.map((feature , index) => (
                <li key={index}>
                    <Link 
                        href={feature.href}
                        className="inline-block grid place-items-center"    
                    >
                        <Image 
                            nextHandle={false}
                            src={feature.image.src}
                            alt={feature.info}
                            style={{height: "56px" , width: "auto"}}
                        />
                        <p className="mt-2 text-xs">{feature.info}</p>
                    </Link>
                </li>
            ))
        }
    </ul>
}