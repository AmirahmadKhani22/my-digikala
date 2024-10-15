import {useState , useEffect} from 'react'
import axios from 'axios'
import TrendsSearches from "./trendsSearches"
import Banner from './banner'

export default function ExtendedSearchBar({openModal}) {
    const [data , setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:3001/v1/autocomplete/?q=")
        .then(({data}) => {
            setData(data.data)
        })
        .catch(console.log)
    },[])
    return <div 
        className="absolute z-2 w-full max-h-[80vh] border overflow-x-hidden overflow-y-auto bg-white py-5 rounded-[inherit] shadow-md"
        onClick={event => event.stopPropagation()}
    >
        <div className="mx-4 [border-bottom:1px_solid_var(--color-secondary-500)]">
            <input 
                type="search"
                placeholder="جستجو"
                className="px-3 w-full outline-none pb-3 text-xs"
            />
        </div>
        {
            data && data.banner && <Banner data={data.banner} />
        }
        {/* searches history */}
        {
            data && data.trends && <TrendsSearches data={data.trends} openModal={openModal} />
        }
    </div>
}