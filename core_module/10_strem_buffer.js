
/* 
buffer is a way of getting the data form server, it send the data in cunk cunk ways that is way we no need to download a vedio to watch  
we know about vedio buffring when net was very slow then if want to watch a vedio then we have to pouse the vedio do duffer*/


/* buffer is a temporary storage that send tha data chunk chunk */


const fs = require('fs')
const { chunk, after } = require('underscore')

const readStream = fs.createReadStream('streamData.txt')

readStream.on('data', (chunk) => {
    console.log("..................");
    console.log(chunk);
})


readStream.on('open', () => {
    console.log("Stream is Open");
})

setTimeout(() => {
    readStream.pause()
    console.log("straming is pause now 😒😒😒😒");
}, 5);

setTimeout(() => {
    readStream.resume()
    console.log('after pause reopen this stream!!!');
   

}, 2000);