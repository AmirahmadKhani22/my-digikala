import Header from '@/components/home/header'
import Main from '@/components/home/main'
import {FaBasketShopping} from "react-icons/fa6"
import {LiaHeadsetSolid} from "react-icons/lia";

export default function Home() {
    return <>
        <Header />
        <Main />
        {/* <div className="fixed z-[9999] bottom-8 left-4">
            <button className="rounded-full bg-fresh-700 text-white p-3 flex items-center">
                <p className="ml-2">سوپرمارکت</p>
                <FaBasketShopping 
                    size="24px"
                />
            </button>
        </div>
        <div className="fixed z-[9999] bottom-8 right-14">
            <button className="rounded-full bg-button-primary text-white p-3">
                <LiaHeadsetSolid 
                    size="24px"
                />
            </button>
        </div> */}
    </>
}