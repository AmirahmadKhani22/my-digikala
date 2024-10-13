const http = require("http")
const axios = require("axios")

const PORT = 3001
const DEST = "https://api.digikala.com"

console.clear()

function CORSHandlerServer() {
    const server = http.createServer(function (req , res) {
        axios.get(`${DEST}${req.url}`)
        .then(response => {
            const {data} = response
            res.writeHead(data.status , {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Max-Age': 2592000,
                'Access-Control-Allow-methods': "GET",
                "Access-Control-Allow-Headers": "content-type",
                "cookie": ""
            })
            res.write(JSON.stringify(data))
            return res.end()
        })
        .catch(error => {
            console.log("the dev server fetching error!" , "============>")
            console.log(error)
            console.log("============>")
        })
    })
    
    server.listen(PORT , () => {
        console.log(`the dev server is running on port ${PORT}!`)
    })
}

CORSHandlerServer()
