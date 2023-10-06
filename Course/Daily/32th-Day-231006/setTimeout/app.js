// 재귀함수 생성
function Recursion() {
  setTimeout(function () {
    console.log("repeat");
    Recursion();
  }, 1000);
}
// 재귀함수 호출
Recursion();
