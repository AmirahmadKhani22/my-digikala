import Logo from "../../logo"
import GoTop from "./goTop"

export default function ContactsPhone() {
    return <div>
        <div className="mb-4 flex items-center justify-between">
            <Logo />
            <GoTop />
        </div>
        <div className="flex gap-x-5 items-center">
            <p className="text-xs">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            <span className="text-xs">|</span>
            <p className="text-xs">۰۲۱-۹۱۰۰۰۱۰۰</p>
            <span className="text-xs">|</span>
            <p className="text-xs">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
    </div>
}