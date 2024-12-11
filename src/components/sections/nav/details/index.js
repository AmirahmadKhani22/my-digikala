import Categories from "./categories"
import Menu from "./menu"
import Location from "./location"

export default function Details() {
    return <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
            <Categories />
            <Menu />
        </div>
        <div>
            <Location />
        </div>
    </div>
}