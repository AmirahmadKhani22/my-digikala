import {useRef , useEffect} from "react"
import {englishNumToPersianNum} from "@/components/utils/persianNum"

export default function Timer({initialTime}) {
    const timerRef = useRef(null)
    useEffect(() => {
        const timer = timerRef.current
        const [hour] = timer.getElementsByClassName("hour")
        const [minute] = timer.getElementsByClassName("minute")
        const [second] = timer.getElementsByClassName("second")
        const time = {
            hour: initialTime.hour,
            minute: initialTime.minute,
            second: initialTime.second,
        }
        const elements = {hour,minute,second}
        const intervalId = setInterval(() => {
            --time.second
            if(time.second < 0) {
                time.second = "59"
                --time.minute
                if(time.minute < 0) {
                    time.minute = "59"
                    --time.hour
                }
            }
            for(const item in elements) {
                if(time[item] < 10) {
                    elements[item].textContent = englishNumToPersianNum("0" + time[item])
                }
                elements[item].textContent = englishNumToPersianNum(time[item])
            }
        } , 980)
        return () => {
            clearInterval(intervalId)
        }
    })
    return <div ref={timerRef} className="flex flex-row-reverse gap-x-0.5">
        <div className="hour size-6 pt-0.5 bg-white text-neutral-800 rounded">
            {englishNumToPersianNum(initialTime.hour)}
        </div>
        <span className="text-lg font-bold">:</span>
        <div className="minute size-6 pt-0.5 bg-white text-neutral-800 rounded">
            {englishNumToPersianNum(initialTime.minute)}
        </div>
        <span className="text-lg font-bold">:</span>
        <div className="second size-6 pt-0.5 bg-white text-neutral-800 rounded">
            {englishNumToPersianNum(initialTime.second)}
        </div>
    </div>   
}