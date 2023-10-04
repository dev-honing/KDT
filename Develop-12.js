// 서버 만들기 위해 내장 모듈인 http를 import
// 프로젝트 파일 시스템에 접근하기 위해 fs 모듈을 import
const http = require("http");
const fs = require("fs");

// 서버 만드는 대표적 메서드인 createServer() 사용
http.createServer(function (request, response) {
  // 콜백함수의 첫번째 매개변수인 request가 할 행동은
  // 웹사이트에 접속(요청)하면
  // 아래의 console.log() 두 개를 실행하는 것이다.
  console.log(request.method);
  console.log(request.url);
});
