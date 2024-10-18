import AddSVGIcon from "@/components/utils/components/addSVGIcon";

export default function Location() {
    return <div className="flex items-center gap-x-2 cursor-pointer">
        <AddSVGIcon
            href="/symbol/location-pin.svg"
            id="location-pin"
            className="size-5 fill-icon-high-emphasis"
        />
        <span className="text-xs leading-3 text-neutral-700">لطفا شهر خود را انتخاب کنید</span>
    </div>
}