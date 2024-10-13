import {useContext} from "react"
import homePageData from "@/contexts/homePageData"
import ShowMore from "./showMore"
import LinkItem from "./link"

export default function DeepLink() {
    const {data} = useContext(homePageData)
    const [widgets] = data.widgets.filter((widget , index) => {
        return widget.name === "deep_links"
    })
    return <div className="pt-6">
        <div className="flex justify-around">
            {
                widgets.data.map((widget , index) => index <= 8 && <LinkItem key={index} widget={widget}/>)
            }
            <div>
                <ShowMore widgets={widgets}/>
            </div>
        </div>
    </div>
}