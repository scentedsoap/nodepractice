//http module
const http = require('http')

//req == request (incoming request)
//res == response (what we are sending back)
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello world')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    //default response
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you are looking for </p>
    <a href="/">back home </a>
    
    `)
})

server.listen(5000)
