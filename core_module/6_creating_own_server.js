const other = require('./Other')

// console.log(other);

const subtrut = other.subtruct(40, 30)
// console.log(subtrut);




const http = require('http')


const server = http.createServer((req, res) => {
    // console.log(req.url); // this will show the url of the browser that are using 

    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "application/json" }); // i can send a json type data , then i have to send a objet data as json.stringify({})
        res.write(JSON.stringify({ course: "web dev back end" })) // showing date in the UI 
        res.end()
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" }) /* i can send a html type data then i have to in wirte function have to give html type writeing  */
        res.write('<p>This is about page</p>') // showing date in the UI 
        res.end()
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<p>This is conatact  page</p>')
        res.end()
    } else {

        res.end("hello node.js")
    }

})
const PORT = 7000;
server.listen(PORT)
console.log(`server is running at port ${PORT}`);

// console.log(http.STATUS_CODES);
console.log("data");