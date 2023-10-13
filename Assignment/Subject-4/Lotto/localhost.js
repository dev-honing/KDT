// http 모듈 import
const http = require("http");
http.createServer((request, responsd) => {
  console.log(request.method); // GET 방식을 사용한 것을 콘솔에서 확인
  console.log(request.url);
})
.listen(8080);