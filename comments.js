//create web server
//create a web server to respond to the request
//create a web server to respond to the request
const http = require('http');
const fs = require('fs');
const path = require('path');

//create a web server
const server = http.createServer((req, res) => {
  //if the request is a GET request
  if (req.method === 'GET') {
    //if the request is to the root URL
    if (req.url === '/') {
      //read the index.html file
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        //if an error occurs
        if (err) {
          //send a response with a status code of 500 and an error message
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          //send a response with a status code of 200 and the content of the index.html file
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      //if the request is to any other URL
      //send a response with a status code of 404 and an error message
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    //if the request is not a GET request
    //send a response with a status code of 405 and an error message
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

//start the web server on port 3000
server.listen(3000, () => {
  console.log('Server started on http://localhost:3000/');
});
//create a web server to respond to the request
const http = require('http');
const fs = require('fs');
const path = require('path');



// //create a web server
// const server = http.createServer((req, res) => {
//   //if the request is a GET request
//   if (req.method === 'GET') {
//     //if the request is to the root URL
//     if (req.url === '/') {
//       //read the index.html file
//       fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//         if (err) {
//           res.writeHead(500, { 'Content-Type': 'text/plain' });
//           res.end('Internal Server Error');
//         } else {
//           res.writeHead(200, { 'Content-Type': 'text/html' });
//           res.end(data);
//         }
//       })}}});
