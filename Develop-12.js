// 서버 만들기 위해 내장 모듈인 http를 import
// 프로젝트 파일 시스템에 접근하기 위해 fs 모듈을 import
const http = require("http");
const fs = require("fs");

// 서버 만드는 대표적 메서드인 createServer() 사용
http
  .createServer(function (request, response) {
    // 콜백함수의 첫번째 매개변수인 request가 할 행동은
    // 웹사이트에 접속(요청)하면
    // 아래의 console.log() 두 개를 실행하는 것이다.
    console.log(request.method);
    console.log(request.url);

    // 웹사이트에 응답으로
    // writeHead() 메서드를 사용해 응답 데이터 헤더를 작성
    // 객체 "Content-Type" : "text/html"을 객체로 넣어주기 위해 변수 선언
    // writeHeadObject 변수 선언
    let writeHeadObject = { "Content-Type": "text/html" }; // 컨텐츠 타입은 html이라는 두번째 매개변수 객체 타입

    response.writeHead(200, writeHeadObject); // 200(정상적으로 접속됨을 의미)

    // file system 모듈을 사용해 미리 정적으로 생성한 index.html 파일을 콜백함수로 읽어들임
    // 그것을 응답 데이터로 활용한 예시
    fs.readFile("./public/index.html", function (err, data) {
      // 조건문 작성
      if (err) {
        console.error("파일을 읽지 못했습니다."); // err이면 오류 메시지 출력
      } else {
        response.end(data); // err이 아니면 end(data)를 응답 데이터로 활용
      }
    });
  })
  .listen(8080);
// node Develop-12.js를 실행하고
// http://localhost:8080으로 이동해 만들어진 서버를 확인
