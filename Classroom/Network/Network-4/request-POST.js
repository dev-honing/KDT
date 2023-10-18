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
      body += chunk.toString(); // 데이터를 문자열로 변환
      // body = body + chunk.toString();과 같은 표현
      // toString() 메서드를 사용하지 않으면,
      // 버퍼(Buffer) 데이터를 문자열로 변환하지 않고 그대로 둔다.
    })

    req.on("end", () => {
      const parsedBody = querystring.parse(body); // 요청 본문을 파싱
      const { username, password } = parsedBody; // ? 이 부분이 잘 이해가 가지 않음
    })
  }
})

// 이해가지 않는 부분 정리하고 merge
const object = {a: 1, b: 2};
console.log(object); // { a: 1, b: 2 }

// 디버거 확인
// a: undefined, b: undefined
// object: {a: 1, b: 2}

const {a, b} = object;
console.log({a,b}); // { a: 1, b: 2 } 

// 디버거 확인
// a: 1, b: 2
// object: {a: 1, b: 2}
// ! a와 b의 value가 생겼음

// * 결론? (잘 모르겠음)
// 변수를 선언한다: 메모리 공간을 확보한다.
// 변수는 메모리 공간의 주소를 나타내는 상징적인 의미가 됨.

// ? 일반적인 방식으로 변수를 선언하면?
// 객체 프로퍼티의 메모리 공간도 확보하지만, 
// key에 대응하는 값이 무엇인지만 입력해놓고, 
// value에 대응하는 값은 가져오지 않는다.
// (undefined로 공간만 확보하고 값을 입력해놓지는 않음) 

// ? 비구조화 할당 방식으로 변수를 선언하면?(단축작성법)
// 바로 접근해서 메모리 공간을 확보하고,
// 프로퍼티의 value에 대응하는 값을 바로 입력함