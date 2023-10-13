// http 모듈 import
const http = require("http");
const server = http.createServer(function (request, response){
  console.log(request.url);
  // index.html
  if (request.url === "/main"){
    const docMain = `
    <html>
      <head>
      </head>
      <body>
        <h1>Main</h1>
      </body>
    </html>
    `
    response.end(docMain);
  }
  // gamePage.html
  if (request.url === "/gamestart"){
    const docGameStart = 
    `
    <html>
      <head>
      </head>
      <body>
        <h1>GameStart</h1>
      </body>
    </html>
    `
    response.end(docGameStart);
  }
});