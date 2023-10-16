// 모듈 import
const http = require('http');
const fs = require('fs');

// createServer() 메서드로 서버 만들기
http.createServer((req, res) =>{
  res.writeHead(500); // 서버 에러 응답 코드
  return res.end('500! Internal Server Error, 서버에 예상치 못한 문제가 생겼습니다.');
});