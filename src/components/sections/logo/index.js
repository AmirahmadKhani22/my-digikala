import Link from '@/components/utils/components/link'
import Image from '@/components/utils/components/image'

export default function Logo() {
    return <Link 
        href="/"
        className="inline-block w-48 h-8 shrink-0"    
    >
        <Image 
            nextHandle={false}
            src="/icon/logo-full-horizontal.svg"
            alt="digikala logo"
            className="object-contain"
        />
    </Link>
}