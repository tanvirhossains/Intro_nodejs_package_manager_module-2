/* 😊😊😊😊😊😊  core module */

// 1/5/2023  monday
/*   this moduel called local module, this "add "function import from the other file and  😒😒Local Module😒😒 */
const { name, add } = require('./Other');
console.log(name);

add(10, 30)




// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);


/*   this moduel called core module,if i want to use i have to run "npm i node" in the ternminal then i can use thiss  😒😒 Core Module😒😒 */

/* const http = require('http');

const server = http.createServer(function (req, res) {
    //write code here
    console.log(`server in runnign`);
});

server.listen(8000);  */




/*   this moduel called third party module, i run "npm install underscore" to use this module 😒😒 Third party Module😒😒 */

var _ = require('underscore');

/* ------------------------------- Example 1 ------------------- */
const value = _.map([1, 2, 3], function (num) { return num * 5; });
console.log(value);

/* ------------------------------- Example 2 ------------------- */

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
const result = _.pluck(stooges, 'age');
console.log(result);