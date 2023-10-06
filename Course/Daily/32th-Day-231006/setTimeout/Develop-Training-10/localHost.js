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
  .listen(8080);
