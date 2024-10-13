import Link from '@/components/utils/components/link'
import Logo from '../../logo'
import Search from './search'
import {HiOutlineLogin} from "react-icons/hi"
import {CiShoppingCart} from "react-icons/ci"

export default function Middle() {
    // get this data from server
    const relatedSearchSlidesInfo = [
        {href: "" , text: "ظرف غذا لانچ باکس"},
        {href: "" , text: "چراغ عقب"},
        {href: "" , text: "هودی بچگانه"},
        {href: "" , text: "خودکار کیان آبی"},
        {href: "" , text: "جالباسی ایستاده"},
    ]
    return <div className="mb-7 flex justify-between items-center">
        <div className="flex-1 gap-x-5 flex items-center
        ">
            <Logo />
            <Search relatedSearchSlidesInfo={relatedSearchSlidesInfo}/>
        </div>
        <div className="flex items-center">
            <div className="flex items-center pt-2 pb-[10px] px-4 border rounded-lg">
                <HiOutlineLogin 
                    size="24px" 
                    title="login"
                    className="ml-2"
                />
                <Link href="/login" className="text-xs font-semibold">ورود | ثبت&zwnj;نام</Link>
            </div>
            <span className="mx-3 inline-block bg-slate-300 w-px h-6"></span>
            <Link 
                href="/checkout/cart"
                className="p-2"
            >
                <CiShoppingCart 
                    size="28px" 
                    title="cart"
                />
            </Link>
        </div>
    </div>
}