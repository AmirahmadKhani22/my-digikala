import Link from '@/components/utils/components/link'
import Logo from '../../logo'
import Search from './search'
import {HiOutlineLogin} from "react-icons/hi"
import {CiShoppingCart} from "react-icons/ci"
import AddSVGIcon from '@/components/utils/components/addSVGIcon'

export default function Middle() {
    // get this data from server
    const relatedSearchSlidesInfo = [
        {href: "" , text: "ظرف غذا لانچ باکس"},
        {href: "" , text: "چراغ عقب"},
        {href: "" , text: "هودی بچگانه"},
        {href: "" , text: "خودکار کیان آبی"},
        {href: "" , text: "جالباسی ایستاده"},
    ]
    return <div className="mb-7 h-11 flex justify-between items-center">
        <div className="flex-1 flex gap-x-5 items-center">
            <Logo />
            <Search relatedSearchSlidesInfo={relatedSearchSlidesInfo}/>
        </div>
        <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center gap-x-2 pt-2 pb-[10px] px-4 border rounded-lg">
                <AddSVGIcon
                    href="/symbol/login-1.svg"
                    id="login-1"
                    className="size-6"
                />
                <Link href="/login" className="text-xs font-semibold">ورود | ثبت&zwnj;نام</Link>
            </div>
            <span className="mx-3 inline-block bg-neutral-200 w-px h-6"></span>
            <Link 
                href="/checkout/cart"
                className="p-2"
            >
                <AddSVGIcon
                    href="/symbol/cart-off.svg"
                    id="cart-off"
                    className="size-6 fill-icon-high-emphasis"
                />
            </Link>
        </div>
    </div>
}