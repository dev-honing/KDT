// http 모듈 import
const http = require("http");
// querystring 모듈 import
const querystring = require("querystring");

http.createServer((req, res) => {
  // 조건식 작성 - POST 방식이고 URL 요청이 /login이면,
  if (req.method === "POST" && req.url === "/login") {
    // 임의의 변수 body 선언
    let body ="";
    // 몸통이라는 임의의 변수에 담는다. "POST" 요청은 본문이 존재하기 때문에
    // body라는 변수에 데이터를'담아둔다'고 표현한다.
    // 해당 변수는 "POST" 요청이 들어올 때마다 초기화된다.
    // 따라서 조건문(if문) 안에서만 사용할 수 있다.
    // if문을 기준으로 body 변수는 지역변수이다.

    req.on("data", (chunk) => {
    })
  }
})