b# Lotto(Mini)
## 구상안
### 기본기능과 규칙
0. 초기 페이지인 index.html에서 아무곳이나 클릭하면 로또를 시작할 수 있다.
1. 시작화면에서는 사용자의 이름이나 아이디 등 사용자 정보를 입력할 수 있게 한다.
2. 로또 번호의 범위는 1~15이다.
3. 사용자는 그 중에서 3개의 번호를 고른다.
4. 추첨 버튼을 누르면 1~15의 번호 중 랜덤으로 3개를 뽑는다.
5. 랜덤으로 뽑은 번호와 사용자가 고른 번호 중 2개가 일치하면 2등 당첨!
6. 랜덤으로 뽑은 번호와 사용자가 고른 번호 중 3개가 모두 일치하면 1등 당첨!
7. 2등 당첨자와 1등 당첨자에게는 이동할 수 있는 특수 페이지 링크를 제공한다.
8. 1등 당첨자의 사용자 정보를 초기화면에 "n회 로또 당첨자"라고 표시한다.

### 추가기능 구상

## 새로 알게 된 내용
> 1 버튼 태그에 하이퍼링크를 설정하는 방법

  X : button href="http://localhost:8080/gamestart"</br>
  O : button type="button" onclick="location.href='http://localhost:8080/gamestart'"

  
  <code><button href="http://localhost:8080/gamestart">게임 시작!</button></code>을 통해 gamestart 페이지로 이동시키려고 했는데 버튼 태그에 onclick = "location.href = `#`"을 통해 처리해야 함을 알게 되었다.
  <button type="button" onclick="location.href='http://localhost:8080/gamestart'">

---
> 2 http://localhost:8080에 진입하면 index.html이 바로 출력되게 하는 방법을 몰랐다.

  1) readFile() 메서드에 대해서도 찾아보았지만 터미널에 콘솔형태로 텍스트만 출력하는 걸로 오해했다.
  2) response.writeHead() 메서드의 사용 연습이 부족했다.
  3) index.html이라는 파일의 경로에 접근하는 연습이 부족했다.

  -> 해결 
  
<code>
// http 모듈 import
const http = require("http");

// fs 모듈 import
const fs = require("fs");

http.createServer((request, response) => {
  console.log(request.url);
  const writeHeadObject = {'Content-Type' : 'text/html'}
  response.writeHead(200, writeHeadObject);
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.error("파일을 읽지 못했어요.")
    }
    else { response.end(data)};
  })
})
.listen(8080);
</code>

---
> 3 Math.random() 메서드 사용 중, 숫자를 3번 뽑아야 하는데 3개의 숫자가 모두 동일한 문제

1) console.log()로 3번 찍기: 실패
2) for문에 넣고 i<3으로 돌리기: 실패

3번째 시도: (구상)
  1. 배열에서 숫자가 있는지 확인하기
  2. 해당 숫자를 배열에서 빼기
  3. 숫자를 제거한 새로운 배열을 생성하기
  4. 그 배열에서 뽑기
이런 순서로 진행되게 해야겠다.

참조) https://velog.io/@eunjin/Javascript-%ED%8A%B9%EC%A0%95-%EC%88%AB%EC%9E%90-%EB%B2%94%EC%9C%84%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5%EC%9D%84-%EC%A0%9C%EC%99%B8%ED%95%9C-%EB%9E%9C%EB%8D%A4-%EC%88%AB%EC%9E%90-%EB%BD%91%EB%8A%94-%EB%B0%A9%EB%B2%95

<code>
function conArr(){
  const newArr = [];
  for (i=0; i<3; i++){
  randomNum = Math.floor(Math.random()*15+1); // 1~15 범위 설정
  
  if(newArr.indexOf(randomNum) === -1 ){
    newArr.push(randomNum);
  } else {
    i-- // 중복되었을 경우에 그냥 넘어가는 문제를 해결하기 위해 감소식을 작성했다고 한다.
  }
}
// console.log(newArr); // 3개의 중복되지 않은 번호가 출력됨을 확인
  console.clear();
  console.count();
  console.log(newArr);
}
setInterval(conArr, 1000);
// 함수화 하고, setInterval() 메서드로 찍어보면서 확인하기
</code>