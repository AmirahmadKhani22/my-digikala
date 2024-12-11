import useData from "@/components/hooks/useData"

export default function SuperMarket() {
    const {data} = useData("superapp_fresh_touchpoint")
    const condtion = data && !!Object.keys(data).length
    return condtion && <></>
}