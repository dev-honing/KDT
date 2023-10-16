// Array.sort() 메서드 활용
const arr = [3, 2, 1];

console.log(arr.sort());
console.log(arr.reverse());
// Math.floor(Math.random()) 메서드도 되는지 확인
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
  // console.log(newArr);
  const sortNewArr = newArr.sort();
  console.log(sortNewArr);
}
setInterval(conArr, 1000);