// entry 파일

// 번호 추첨을 위한 로직 작성
function conArr(){
  const newArr = [];
  for (i=0; i<3; i++){
  randomNum = Math.floor(Math.random()*15+1);
  
  if(newArr.indexOf(randomNum) === -1 ){ // ? 조건식 부분을 잘 모르겠다
    newArr.push(randomNum);
  } else {
    i--}
  }
  console.clear();
  console.count();
  console.log(newArr);
}
setInterval(conArr, 1000); // [14, 11, 9] 등 정렬이 안되는 문제 확인!

// 보기 좋게 순차 정렬 해보자!