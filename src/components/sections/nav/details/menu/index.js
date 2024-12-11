import data from "./data.json"
import styles from "./hover.module.css"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Menu() {
    return <div className="flex items-center gap-x-3">
        <menu className="px-3 border-l border-r flex items-center gap-x-6">
            {
                data.map((item , index) => {
                    return <li 
                        key={index}
                        className={`${styles["on-hover-underline"]}`}
                    >
                        <Link
                            href={item.link}
                            className="w-full h-full flex items-center gap-x-2"
                        >
                            <AddSVGIcon
                                href={item.icon.href}
                                id={item.icon.id}
                                className="size-4 fill-icon-low-emphasis"
                            />
                            <span className="text-[12px] leading-4 text-neutral-600">{item.title}</span>
                        </Link>
                    </li>
                })
            }
        </menu>
        <ul className="flex items-center gap-x-6">
            <li
                className={`${styles["on-hover-underline"]}`}
            >
                <Link
                    href="/faq/"
                    className="w-full h-full flex items-center"
                >
                    <span className="text-[12px] leading-4 text-neutral-600">سوالی دارید؟</span>
                </Link>
            </li>
            <li
                className={`${styles["on-hover-underline"]}`}
            >
                <Link
                    href="/landings/seller-introduction/"
                    className="w-full h-full flex items-center"
                >
                    <span className="text-[12px] leading-4 text-neutral-600">در دیجی‌کالا بفروشید!</span>
                </Link>
            </li>
        </ul>
    </div>
}