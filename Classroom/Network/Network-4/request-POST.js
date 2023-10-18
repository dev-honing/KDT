// http 모듈 import
const http = require("http");
// querystring 모듈 import
const querystring = require("querystring");

http.createServer((req, res) => {
  // 조건식 작성 - POST 방식이고 URL 요청이 /login이면,
  if(req.method === "GET" && req.url === "/"){
    console.log(`${req.method} 방식으로 접속 요청`);
  }
  else if (req.method === "POST" && req.url === "/login") {
    console.log()
    // 임의의 변수 body 선언
    let body ="";
    // 몸통이라는 임의의 변수에 담는다. "POST" 요청은 본문이 존재하기 때문에
    // body라는 변수에 데이터를'담아둔다'고 표현한다.
    // 해당 변수는 "POST" 요청이 들어올 때마다 초기화된다.
    // 따라서 조건문(if문) 안에서만 사용할 수 있다.
    // if문을 기준으로 body 변수는 지역변수이다.

    req.on("data", (chunk) => {
      body += chunk.toString(); // 데이터를 문자열로 변환
      // body = body + chunk.toString();과 같은 표현
      // toString() 메서드를 사용하지 않으면,
      // 버퍼(Buffer) 데이터를 문자열로 변환하지 않고 그대로 둔다.
    })

    req.on("end", () => {
      const parsedBody = querystring.parse(body); // 요청 본문을 파싱
      const { username, password } = parsedBody; 
      
      console.log(`form 입력으로부터 받은 데이터 확인: `, parsedBody);
      console.log(`form 입력으로부터 받은 데이터 확인: `, username);
      console.log(`form 입력으로부터 받은 데이터 확인: `, password);
      
      const writeHeadType = {'Content=Type' : 'text/plain'}
      res.writeHead(200, writeHeadType);
      res.end("login Success!");
    })
    
  }
}).listen(3000, () =>{
  const PORT = 3000;
  console.log(`CLI 창에서 편리하게 링크 확인: http://localhost:${PORT}/`)
});