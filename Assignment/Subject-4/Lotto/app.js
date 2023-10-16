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
  const SortednewArr = newArr.sort();
  console.log({newArr, SortednewArr});
}
setInterval(conArr, 1000);

// ! array.sort() 메서드는 문자열을 정렬하는 기법이라 40과 100을 비교하면 4가 더 크므로 40이 더 큰 것으로 판단한다고 한다.
// 증명과정
const a = [40, 100];
console.log(a.sort()); // [100, 40]
console.log(a.reverse()); // [40, 100]
// 진짜였다...