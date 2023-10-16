// entry 파일

// 번호 추첨을 위한 로직 작성
// 1. 배열로 출력해보기(1~10)
const LottoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 소숫점을 제거하기 위해 Math.floor() 메서드 안쪽에 로직을 넣어보자
const LottoRandom = Math.random(LottoArr)*10;
const floorLottoRandom = Math.floor(LottoRandom);
// console.log(floorLottoRandom);

// function Lotto(){
//   console.log(floorLottoRandom);
//   const a = console.log(floorLottoRandom);
// }
// Lotto();

// 구상
// 확인을 위한 간단한 배열 생성
const arr = [1, 2, 3];
// 1. 배열에 있는 요소인지 확인하기
// 1-1. indexOf() 메서드 사용해보기
const checking = arr.indexOf(2); 
console.log(checking); // 배열의 인덱스가 출력됨

// 2. 배열에 있는 요소를 제거하기
// 3. 배열에 있는 요소를 제외한 새로운 배열 생성하기
// 4. 다시 뽑기