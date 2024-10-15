import Link from '@/components/utils/components/link'
import Image from '@/components/utils/components/image'

export default function Logo() {
    return <Link 
        href="/"
        className="shrink-0 inline-block w-48 h-8"    
    >
        <Image 
            nextHandle={false}
            src="/icon/logo-full-horizontal.svg"
            alt="digikala logo"
            width={195}
            height={30}
            className="object-contain"
        />
    </Link>
}