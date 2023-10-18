// http 모듈 import
const http = require("http");
// querystring 모듈 import
const querystring = require("querystring");

http.createServer((req, res) => {
  // 조건식 작성 - POST 방식이고 URL 요청이 /login이면,
  if (req.method === "POST" && req.url === "/login") {
    
  }
})