// entry point - app.js

// 추첨기 로직을 함수화
function conArr(){
  const newArr = [];
  for (i=0; i<3; i++){
    const randomNum = Math.floor(Math.random()*15+1);
    if(newArr.indexOf(randomNum) === -1){
      newArr.push(randomNum);
      
    } else {
      i--;
    }
  }
  console.clear();
  console.count();
  newArr.sort(function(a,b){
    return a-b;
  })
  console.log(newArr);
}
setInterval(conArr, 1000);