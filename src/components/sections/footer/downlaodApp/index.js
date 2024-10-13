import markets from './data.json'
import Image from "@/components/utils/components/image"
import Link from "@/components/utils/components/link"

export default function DownloadApp() {
    return <div className="bg-[#3c4b6d] rounded-md p-3 mb-7 select-none flex itmes-center justify-between">
        <div className="flex items-center gap-x-4">
            <Image 
                nextHandle={true}
                src="/image/app-icon.png"
                alt="digikala app"
                fill={false}
                width={44}
                height={44}
                style={{width: "auto" , height: "auto"}}
                className="rounded-lg"
            />
            <p className="text-3xl text-white">دانلود اپلیکیشن دیجی‌کالا</p>
        </div>
        <div className="flex gap-x-4 items-center">
            {
                markets.map((item , index) => {
                    return <a 
                        key={index} 
                        href={item.href}
                        className="block shrink-0"
                    >
                        <Image 
                            nextHandle={false}
                            src={item.icon.src}
                            alt={item.icon.alt}
                            className="h-11 max-w-36"
                        />
                    </a>
                })
            }
            <Link 
                href="/landings/new-app"
                className="mr-2 block shrink-0"
            >
                <Image 
                    nextHandle={false}
                    src="/icon/more-1.svg"
                    alt="digikala download app page"
                    className="h-11 bg-white border rounded size-10"
                />
            </Link>
        </div>
    </div>
}