const http = require("http");
const { chunk } = require("lodash");

const requestlistener = (req, res) => {
    const { method } = req

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200
    const { url } = req

    console.log(method)
    switch (method) {
        case "GET":
            {
                res.end('<h1>Hello GET!</h1>');
            }
            break;
        case "POST":
            {
                if (url === '/') {
                    let body = [];

                    req.on('data', (chunk) => {
                        body.push(chunk);
                    });

                    req.on('end', () => {
                        body = Buffer.concat(body).toString();
                        const { name } = JSON.parse(body);
                        res.end(`<h1>Hai, ${name}!</h1>`);
                    });
                }else{
                    res.end("gagal")
                }
            }
            break;
        case "PUT":
            {
                res.end('<h1>Hello PUT!</h1>');
            }
            break;
        case "DELETE":
            {
                res.end('<h1>Hello DELETE!</h1>');
            }
            break;

        default:
            {
                res.statusCode = 404
                res.end('<h1>Page Not Found</h1>')
            }
    }

}

const server = http.createServer(requestlistener);

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})