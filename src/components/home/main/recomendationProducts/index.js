import {useState , useEffect} from "react"
import Wrapper from "./wrapper"
import axios from "axios"

export default function RecomendationProducts({part}) {
    const initialData = {}
    const [data , setData] = useState(initialData)
    useEffect(() => {
        axios("http://localhost:3001/v1/recommendation/?web_page=home")
        .then(({data}) => {
            setData(data.data)
        })
        .catch(error => {
            setData(initialData)
            console.log("get home page recomendation error!" , "=========>")
            console.log(error)
            console.log("=========>")
        })
    },[])
    const condition = data.categories && !!data.categories.length
    return condition && <div className="mt-4">
        <Wrapper categories={data.categories} part={part} />
    </div>
}