import Image from "@/components/utils/components/image"
import {persianNumSeperator} from "@/components/utils/persianNum"

export default function Info({data}) {
    return <div className="flex items-center gap-x-5">
        <Image 
            nextHandle={true}
            fill={false}
            width={64}
            height={64}
            style={{height: "auto"}}
            src="/image/fresh.png"
            alt="آیکون شگفت انگیز سوپرمارکتی"
            className="shrink-0"
        />
        <Image
            nextHandle={false}
            src="/image/fresh-incredible-offer.svg"
            alt="شگفت انگیز سوپرمارکتی"
            width={250}
            height={28}
            className="shrink-0"
        />
        <p className="bg-fresh-700 text-base text-white rounded-full px-3 pt-1 pb-0.5 shrink-0">تا {persianNumSeperator(data["discount_percent"])}% تخفیف</p>
    </div>
}