import {useEffect} from "react"

export default function Modal({
    propagate=false,
    containerClassName="",
    wrapperClassName="",
    backgrondClassName="",
    onClickCB=()=>{},
    children=null
}) {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "visible"
            window.scrollTo(0 , window.scrollY)
        }
    })
    return <div 
        className={`absolute left-0 w-full h-full ${containerClassName}`}
        style={{top: `${Math.round(window.scrollY)}px`}}
        onClick={event => {
            if(!propagate) {
                event.stopPropagation()
            }
            onClickCB(event)
        }}
    >
        <div className={`w-full h-full relative ${wrapperClassName}`}>
            <div className={`absolute inset-0 h-full w-full z-[-1] ${backgrondClassName}`}></div>
            {children}
        </div>
    </div>
} 