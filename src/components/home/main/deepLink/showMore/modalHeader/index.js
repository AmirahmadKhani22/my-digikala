import AddSVGIcon from "@/components/utils/components/addSVGIcon"

export default function ModalHeader({closeOnClick}) {
    return <div className="h-14 flex items-center justify-between py-3 mx-4 border-b">
        <div className="flex items-center gap-x-2">
            <AddSVGIcon
                href="/symbol/digikala-smile.svg"
                id="dg-smile"
                className="size-6 fill-icon-primary"
            />
            <p className="font-bold">خدمات دیجی&zwnj;کالا</p>
        </div>
        <button 
            className="size-6"
            onClick={closeOnClick}
        >
            <AddSVGIcon
                href="/symbol/close-1.svg"
                id="close-1"
                className="w-full h-full fill-icon-high-emphasis"
            />
        </button>
    </div>
}