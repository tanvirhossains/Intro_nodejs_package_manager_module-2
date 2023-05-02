/* 
file system work 2 different ways 
1. asynchronous ways
2. synchronous ways  */

const http = require('http')
const fs = require('fs')


/* --------------------😒😒😒😒 File system read system syncronous and asyncronous ways  */
/* const server = http.createServer((req, res) => {
    // console.log(req.url); // the url value will sow here 
    const value = fs.readFileSync('fs_file.txt')
    res.write(value)
    res.end()

}) */


/* const server = http.createServer((req, res) => {
    // console.log(req.url); // the url value will sow here 
    if (req.url = '/') {
        fs.readFile('fs_file.txt', (error, data) => {
            if (error) {
                res.write("failed to Read file!!!")
                res.end()
            } else {
                res.write(data)
                res.end()
            }
        })
    }
})
 */



/* --------------------😒😒😒😒 File writing  system syncronous and asyncronous ways  */

const server = http.createServer((req, res) => {
    // console.log(req.url); // the url value will sow here 
    const value = fs.writeFileSync('newFile.txt', " 🫡🫡🫡🫡 syncronous way file writing !!!!!!")
    console.log(value);
    if (value) {
        res.write("data write succefully")
        res.end()
    } else {
        res.write("a error arised!!!")
        res.end()
    }


})


// const server = http.createServer((req, res) => {
//     // console.log(req.url); // the url value will sow here 
//     fs.writeFile('newFile.txt', "Asyncronous way file writing !!!", (error) => {
//         if (error) {
//             res.write("data didn't write succrfullty!!")
//             res.end()

//         } else {
//             res.write("data write successfully !!1")
//             res.end();

//         }

//     })

// })



const PORT = 9000;
server.listen(PORT)
console.log(`Server is running at ${PORT}`);