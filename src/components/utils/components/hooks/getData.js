const HOSTNAME = "http://localhost:3001"

export async function getJsonData(subPath="") {
    const url = `${HOSTNAME[HOSTNAME.length-1] === "/" ? HOSTNAME.slice(0,-1) : HOSTNAME}${subPath[0] === "/" ? subPath : "/"+subPath}`
    let jsonData = {}
    try {
        const rawData = await fetch(url)
        jsonData = await rawData.json()
    }
    catch(error) {
        console.log("===> Get Data Error!")
        console.log(error)
        console.log("===")
    }
    return jsonData
}