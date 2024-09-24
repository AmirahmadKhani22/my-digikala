import {useRef , useState , useEffect} from "react"
 
export default function NotifEmail() {
    const inputRef = useRef(null)
    const hintRef = useRef(null)

    const [submitData , setSubmitData] = useState("")

    useEffect(() => {
        const input = inputRef.current
        const hint = hintRef.current
        if(input && hint) {
            const handleInput = event => {
                const value = event.target.value
                if(!value) {
                    hint.innerText = "اینجا را خالی نگذارید"
                    setSubmitData("")
                } else {
                    if(!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}/g.test(value))) {
                        hint.innerText = "پست الکترونیک وارد شده درست نیست"
                        setSubmitData("")
                    } else {
                        hint.innerText = ""
                        setSubmitData(value)
                    }
                }
            }
            input.addEventListener("input" , handleInput)

            return () => {
                input.removeEventListener("input" , handleInput)
            }
        }
    })

    const handleSubmit = event => {
        event.preventDefault()
        if(submitData) {

        }
        console.log(event)
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="notif-email">
            <h6 className="font-bold">با ثبت ایمیل، از جدیدترین تخفیف&zwnj;ها باخبر شوید</h6>
        </label>
        <div className="mt-4 flex gap-x-2 items-center">
            <input 
                ref={inputRef}
                id="notif-email"
                type="email"
                name="emailNotification"
                placeholder="ایمیل شما"
                className="flex-1 h-12 text-lg p-2 bg-neutral-100 rounded-lg outline-none"
            />
            <input 
                type="submit"
                value="ثبت"
                disabled={!submitData}
                className={`text-white h-12 py-3 px-4 rounded-lg ${!submitData ? "cursor-[not-allowed] bg-button-disable" : "cursor-pointer bg-button-primary"}`}
            />
        </div>
        <p ref={hintRef} className="mt-2 text-xs text-hint-text-error"></p>
    </form>
}