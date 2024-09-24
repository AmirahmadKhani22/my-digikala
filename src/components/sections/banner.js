import {useState , useEffect} from 'react'
import Image from "../utils/image"
import Link from "../utils/link"

export default function Banner() {
    const [data , setData] = useState(null)
    useEffect(() => {
        // banner data api
        // fetch("")
        //     .then(async data => setData(await data.json()))
        //     .catch(console.log)
    })
    return data && <Link 
        href={data.link}
        className="block w-full"    
    >
        <Image
            containerClassName="w-full"
            src={data.image.src}
            alt={data.image.alt}
        />
    </Link>
}