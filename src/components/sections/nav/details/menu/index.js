import data from "./data.json"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function Menu() {
    return <menu>
        {
            data.map((item , index) => {
                return <li 
                    key={index}
                >
                    <Link
                        href={item.link}
                    >
                        <AddSVGIcon
                            href={item.icon.href}
                            id={item.icon.id}
                        />
                        <span>{item.title}</span>
                    </Link>
                </li>
            })
        }
    </menu>
}