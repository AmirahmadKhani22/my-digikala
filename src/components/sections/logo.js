import Link from '../utils/link'
import Image from '../utils/image'

export default function Logo() {
    return <Link 
        href="/"
        className="inline-block w-48 h-8 shrink-0"    
    >
        <Image 
            nextHandle={false}
            src="/icon/logo-full-horizontal.svg"
            alt="digikala logo"
            imageClassName="object-contain"
        />
    </Link>
}