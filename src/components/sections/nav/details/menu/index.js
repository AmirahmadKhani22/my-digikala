import data from "./data.json"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Menu() {
    return <menu className="px-3 border-l border-r flex items-center gap-x-6">
        {
            data.map((item , index) => {
                return <li 
                    key={index}
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
                        <span className="text-[13px] leading-4 text-neutral-600">{item.title}</span>
                    </Link>
                </li>
            })
        }
    </menu>
}