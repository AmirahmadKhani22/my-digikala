import Categories from "./categories"
import Menu from "./menu"
import Location from "./location"

export default function Details() {
    return <div>
        <div>
            <Categories />
            <Menu />
        </div>
        <div>
            <Location />
        </div>
    </div>
}