import features from './data.json'
import Link from "@/components/utils/link"
import Image from "@/components/utils/image"

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
                            nextHandle={true}
                            fill={false}
                            width={56}
                            height={56}
                            src={feature.image.src}
                            alt={feature.info}
                            imageClassName="w-auto h-[56px]"
                        />
                        <p className="mt-2 text-xs">{feature.info}</p>
                    </Link>
                </li>
            ))
        }
    </ul>
}