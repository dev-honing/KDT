// http 모듈 import
const http = require("http");
const server = http.createServer(function (request, response){
  console.log(request.url);
});