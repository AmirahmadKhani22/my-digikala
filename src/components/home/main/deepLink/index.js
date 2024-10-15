import useData from "@/components/hooks/useData"
import ShowMore from "./showMore"
import LinkItem from "./link"

export default function DeepLink() {
    const {data} = useData("deep_links")
    const condition = data && !!data.length
    const visibleItemsCount = 8
    return condition && <div className="pt-6">
        <div className="flex justify-around">
            {
                data.map((item , index) => (index <= visibleItemsCount) && <LinkItem key={index} widget={item}/>)
            }
            <div>
                <ShowMore widgets={data}/>
            </div>
        </div>
    </div>
}