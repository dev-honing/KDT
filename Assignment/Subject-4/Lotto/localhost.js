// http 모듈 import
const http = require("http");

// fs 모듈 import
const fs = require("fs");

http.createServer((request, response) => {
  console.log(request.url);
  const writeHeadObject = {'Content-Type' : 'text/html'}
  response.writeHead(200, writeHeadObject);
})
.listen(8080);