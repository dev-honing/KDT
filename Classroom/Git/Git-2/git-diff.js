// git diff.js
// Network-2에서 작업한 예제를 재사용

// http 모듈 import
const http = require('http');

const server = http.createServer((req, res)=>{
  console.log("URL로 최초접속하는 트랜잭션 확인하기");
  console.log(req.url);

});
server.listen(3000, () =>{
  console.log(`server running : http://localhost:3000/`);
})
// 요청 URL은 '/'이고 요청 유형은 'GET'임을 확인!

// ! git diff는 Working Directory와 Staging Area 사이의 차이를 확인하기 위한 명령어이므로 커밋을 한 뒤, `git diff`를 쓰면 아무것도 확인되지 않았다.
// * 추가 사항은 초록색으로, 삭제된 사항은 빨간색으로 표기되는 것을 확인

// ! VS Code의 Extension인 'Git Graph' 프로그램을 사용하면 더 쉽게 GUI로 확인할 수 있었다.