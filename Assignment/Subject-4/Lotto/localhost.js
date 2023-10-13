// http 모듈 import
const http = require("http");
const server = http.createServer(function (request, response){
  console.log(request.url);
  // index.html
  if (request.url === "/"){
    const docIndex = `
    <html>
      <head>
      </head>
      <body>
        <h1>초기 화면</h1>
      </body>
    </html>
    `
    response.end(docIndex);
  }
  // gameStart.html
  if (request.url === "/gamestart"){
    const docGameStart = 
    `
    <html>
      <head>
      </head>
      <body>
        <h1>게임 시작</h1>
      </body>
    </html>
    `
    response.end(docGameStart);
  }
});
server.listen(8080); // 포트번호 8080 사용