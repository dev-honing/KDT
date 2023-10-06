setTimeout(function () {
  console.log("첫번째");
  setTimeout(function () {
    console.log("두번째");
    setTimeout(function () {
      console.log("세번째");
    }, 1000);
  }, 2000);
}, 3000);
// 함수를 부르는 함수 : 콜백함수
// 제어할 수 있지만 이렇게 많이 사용하면 "Callback Hell"이 생길 수 있다!
