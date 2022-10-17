const http = require("http")
const { chunk } = require("lodash")

const requestlistener = (req, res) => {
    res.setHeader('Content-Type', 'application/JSON')
    res.setHeader('X-Powered-By', 'NodeJS')
    const { method, url } = req
    switch (url) {
        case '/':
            {
                if (method === "GET") {
                    res.statusCode = 200
                    res.end(JSON.stringify({
                        message: "ini adalah homepage"
                    }))
                } else {
                    res.statusCode = 400
                    res.end(JSON.stringify({
                        message: `halaman tidak dapat diakses dengan method ${method}`
                    }))
                }
            }
            break;
        case '/about':
            if (method === 'GET') {
                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: `ini adalah halaman about`
                }))
            } else if (method === "POST") {
                let body = []
                
                req.on("data", chunk => {
                    body = body.push(chunk)
                })
                req.on('end', () => {
                    body = Buffer.concat(body).toString();
                    const { name } = JSON.parse(body)
                    res.statusCode = 200;
                    res.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`
                    }))
                })
            } else {
                res.statusCode=400
                res.end(JSON.stringify({
                    message: `halaman tidak dapat diakses dengan method ${method}`
                }))
            }
            break;

        default:
            res.statusCode=404
            res.end(JSON.stringify({
                message:"halaman tidak ditemukan"
            }))
            break;
    }
}

const server = http.createServer(requestlistener)

const host = 'localhost'
const port = 5000

server.listen(port, host, () => {
    console.log('connection success')
});