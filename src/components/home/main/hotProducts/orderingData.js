export default function orderingData(data=[],seperatingNumber=3) {
    let temp = []
    const result = []
    for(let i = 0 ; i < data.length ; i++) {
        const remain = i % seperatingNumber
        temp[remain] = data[i]
        if(remain === seperatingNumber - 1) {
            result.push(temp)
            temp = []
        }
    }
    return result
}