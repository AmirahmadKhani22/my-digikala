import {useState} from "react"
import Content from './content'
import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function BusinessDiscription() {
    const [showMore , setShowMore] = useState(false)
    const handleShowMoreClick = event => {
        setShowMore(state => !state)
    }
    return <div className="ml-11 mb-1 basis-9/12">
        <Content showMore={showMore} />
        <button
            className="mt-3 inline-block text-sm text-button-secondray flex items-center"
            onClick={handleShowMoreClick}
        >
            {showMore ? "بستن" : "مشاهده بیشتر"}
            <AddSVGIcon 
                href="/symbol/left-1.svg"
                id="left-1"
                className="size-3 mr-1"
            />
        </button>
    </div>
}