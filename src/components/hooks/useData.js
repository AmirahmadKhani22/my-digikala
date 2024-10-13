import {useContext} from "react"
import homePageData from "@/contexts/homePageData"

export default function useData(dataName , callback=()=>{}) {
    const {data} = useContext(homePageData)
    const [widgets] = data.widgets.filter((widget , index) => widget.name === dataName)
    callback()
    return widgets ?? {data: []}
}