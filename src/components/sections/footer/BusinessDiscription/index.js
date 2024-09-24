import {useState} from "react"
import Content from './content'
import {FaAngleLeft} from "react-icons/fa"

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
            <FaAngleLeft className="mr-1"/>
        </button>
    </div>
}