setTimeout(function () {
  console.log("첫번째");
  setTimeout(function () {
    console.log("두번째");
  }, 2000);
}, 3000);
setTimeout(function () {
  console.log("세번째");
}, 1000);
// 한 줄만 위로 올리면 "두번째"가 5초 뒤에 실행되게 할 수 있다!
