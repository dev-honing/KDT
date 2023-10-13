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
> 버튼 태그에 하이퍼링크를 설정하는 방법

  X : button href="http://localhost:8080/gamestart"</br>
  O : button type="button" onclick="location.href='http://localhost:8080/gamestart'"

  
  <code><button href="http://localhost:8080/gamestart">게임 시작!</button></code>을 통해 gamestart 페이지로 이동시키려고 했는데 버튼 태그에 onclick = "location.href = `#`"을 통해 처리해야 함을 알게 되었다.
  <button type="button" onclick="location.href='http://localhost:8080/gamestart'">


> localhost:8080으로 진입하면 내장 파일을 읽게 하는 방법

  <모르는 부분>
  1. readFile() 메서드와 readFileSync() 메서드의 차이점과 사용법이 익숙하지 않다.
  
  1. fs 모듈을 import 하고
  2. fs.readFile() 메서드를 사용해서 파일을 불러온다.
    -> 내가 하려는 작업은 파일 내부 텍스트를 불러오는 게 아니라, localhost:8000으로 진입하면 index.html의 내용물이 바로 출력되게 하려고 한다.