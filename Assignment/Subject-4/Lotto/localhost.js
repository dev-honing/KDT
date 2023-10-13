// http 모듈 import
const http = require("http");

// fs 모듈 import
const fs = require("fs");

const url = require("url");

http.createServer((request, response) => {
  console.log(request.url);
  const writeHeadObject = {'Content-Type' : 'text/html'}
  response.writeHead(200, writeHeadObject);
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.error("파일을 읽지 못했어요.")
    }
    else { response.end(data)};
  })
})
.listen(8080);