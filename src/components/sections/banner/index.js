import {useState , useEffect} from 'react'
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"
import axios from 'axios'

export default function Banner() {
    const [data , setData] = useState(null)
    useEffect(() => {
        axios.get("")
        .then((response) => console.log(response))
        .catch(error => {
            console.log("get Nav banner error!" , "========>")
            console.log(error)
            console.log("========>")
        })
    })
    const condition = data
    return condition && <Link 
        href={data.link}
        className="block w-full h-16 relative"    
    >
        <Image
            nextHandle={true}
            fill={true}
            src={data.image.src}
            alt={data.image.alt}
            sizes="100vw"
            className="absolute inset-0 w-full h-full"
        />
    </Link>
}