setTimeout(function () {
  console.log("첫번째");
}, 3000);
setTimeout(function () {
  console.log("두번째");
}, 2000);
setTimeout(function () {
  console.log("세번째");
}, 1000);

// 작업 단위 실행 : 동기적 처리 (순서대로)
// 시간 단위 실행 : 비동기적 처리
