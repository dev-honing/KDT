const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);
    let writeHeadObject = { "Content-Type": "text/html" };
    response.writeHead(200, writeHeadObject);
    fs.readFile("./clickGame.html", function (err, data) {
      if (err) {
        console.error("파일을 읽지 못했습니다.");
      } else {
        response.end(data);
      }
    });
  })
  .listen(8080); // node localHost.js를 실행하여 clickGame.html을 불러올 수 있는지 확인
