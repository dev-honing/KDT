// http 모듈 import
const http = require("http");
http.createServer((request, response) => {
  console.log(request.url);
  response.writeHead(200, {'Content-Type' : 'text/html'})
})
.listen(8080);