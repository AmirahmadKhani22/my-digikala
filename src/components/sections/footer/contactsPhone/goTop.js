import {HiChevronUp} from "react-icons/hi"

export default function GoTop() {
    const handleScrollTop = event => {
        window.scrollTo(0 , 0)
    }
    return <button 
        className="flex gap-x-1.5 items-center pr-4 py-2 pl-2 border rounded-md"
        onClick={handleScrollTop}
    >
        <p className="text-sm text-neutral-400">بازگشت به بالا</p>
        <HiChevronUp 
            size="24px"
            className="text-neutral-400"
        />
    </button>
}