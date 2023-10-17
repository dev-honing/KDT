// git diff.js
// Network-2에서 작업한 예제를 재사용

// http 모듈 import
const http = require('http');

const server = http.createServer((req, res)=>{
  console.log("URL로 최초접속하는 트랜잭션 확인하기");
  console.log(req.url);

  console.log("URL로 최초접속하는 요청 유형 확인하기")
  console.log(req.method);
});
server.listen(3000, () =>{
  console.log(`server running : http://localhost:3000/`);
})
// 요청 URL은 '/'이고 요청 유형은 'GET'임을 확인!

// -> 저장하고 `git commit`