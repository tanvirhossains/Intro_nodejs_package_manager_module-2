

/* 
we can brack down the quiry url and can use as we want in  */

const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
    const address_url = 'http://localhost:8000/contact?name=tanvir&home=bangladesh'
    const parsed_url = url.parse(address_url, true)
    console.log(parsed_url);
    // console.log(parsed_url.query);
    // console.log(parsed_url.query.home);
    // console.log(u);
    res.end("this si node js of tanvr")
})

console.log(url);
const PORT = 8000;
server.listen(PORT)
console.log(`server is runnig at ${PORT}`);
