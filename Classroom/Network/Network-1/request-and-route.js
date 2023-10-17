// 모듈 import
const http = require('http');
const fs = require('fs');

// createServer() 메서드로 서버 만들기
http.createServer((req, res) =>{
  res.writeHead(500); // 서버 에러 응답 코드
  return res.end('500! Internal Server Error, 서버에 예상치 못한 문제가 생겼습니다.');
}
);
console.log("어떤 요청이 들어오는지 확인", "url -> ", req.url, "method -> ", req.method);

// 라우팅 처리 제작할 때, 두 가지 요청 데이터를 확인해야 한다.
// 1. 요청 URL
// 2. 요청 메서드

// 요청 URL이 /이고 요청 메서드가 GET일 때를 특정하는 조건식
if(req.url === '/' && req.method === 'GET'){
  fs.readFile('./static/index.html', 'utf8', (err, data) => {
    if (err){
      serverErrorLog();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}