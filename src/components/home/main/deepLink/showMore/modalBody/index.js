import Image from "@/components/utils/components/image"
import LinkItem from "../../link"
import Link from "@/components/utils/components/link"
import AddSVGIcon from "@/components/utils/components/addSVGIcon"
import handleURL from "@/components/utils/handleURL"

export default function ModalBody({services , groupServices}) {
    return <div className="h-full mb-5 px-5 overflow-y-auto">
        <div className="my-8 px-3 grid grid-cols-6 gap-y-4">
            {
                services.map((widget , index) => <LinkItem key={index} widget={widget}/>)
            }
        </div>
        <div className="">
            <h3 className="font-semibold text-neutral-500">سرویس&zwnj;های گروه دیجی&zwnj;کالا</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
                {
                    groupServices.map((widget , index) => <Link 
                        key={index}
                        href={handleURL(widget.url)}
                        className="flex p-2 border rounded-xl"
                    >
                        <div className="ml-2 shrink-0 grid place-items-center">
                            <Image 
                                nextHandle={true}
                                fill={false}
                                src={widget.icon.url[0]}
                                alt={widget.title}
                                width={52}
                                height={52}
                                style={{height: "52px"}}
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm/8 text-neutral-700 font-bold">{widget.title}</h4>
                                <AddSVGIcon
                                    href="/symbol/left-arrow-1.svg"
                                    id="left-arrow-1"
                                    className="size-5 fill-icon-low-emphasis"
                                />
                            </div>
                            <small className="text-neutral-500 text-xs">{widget.description}</small>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    </div>
}