const http = require("http");
const { chunk } = require("lodash");
const requestlistener = (req, res) => {
    const { method } = req

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200
    const { url } = req

    switch (url) {
        case '/':
            (method === 'GET') ? res.end('<h1>Ini adalah homepage</h1>') : res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
            break;
        case '/about':
            if (method === 'GET') {
                res.end(`<h1>Halo! ini adalah halaman about</h1>`)
            }
            else if (method === 'POST') {
                let body = []
                req.on('data', (chunk) => {
                    body.push(chunk)
                })
                req.on('end', () => {
                    body = Buffer.concat(body).toString();
                    const { name } = JSON.parse(body)
                    res.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`)
                })
            } else {
                res.end(`Halaman tidak dapat diakses dengan ${method} request`)
            }
            break;
        default:
            res.end('<h1>Halaman tidak ditemukan!</h1>')
            break;
    }

}

const server = http.createServer(requestlistener);

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})