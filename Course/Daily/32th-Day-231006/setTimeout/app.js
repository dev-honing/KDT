setTimeout(function () {
  console.log("첫번째");
  setTimeout(function () {
    console.log("두번째");
    setTimeout(function () {
      console.log("세번째");
    }, 1000);
  }, 2000);
}, 3000);
// 가독성이 다소 떨어지지만 세번째가 6초 뒤 실행되게 할 수도 있다!
