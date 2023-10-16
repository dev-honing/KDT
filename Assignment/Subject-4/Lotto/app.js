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

// 2. 배열에 있는 요소를 제거하기
// 3. 배열에 있는 요소를 제외한 새로운 배열 생성하기
// 4. 다시 뽑기


// 참조(https://velog.io/@eunjin/Javascript-%ED%8A%B9%EC%A0%95-%EC%88%AB%EC%9E%90-%EB%B2%94%EC%9C%84%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5%EC%9D%84-%EC%A0%9C%EC%99%B8%ED%95%9C-%EB%9E%9C%EB%8D%A4-%EC%88%AB%EC%9E%90-%EB%BD%91%EB%8A%94-%EB%B0%A9%EB%B2%95)
// 새로운 관점 - 빈 배열을 변수 선언하고, for문에 넣은 뒤, arr.push() 메서드로 요소를 추가해줌
const newArr = []; // 빈 배열 선언
// 3가지 숫자를 뽑음
for(i=0; i<3; i++){
  randomNum = Math.floor(Math.random()*15+1); // 1~15 범위의 숫자가 생성됨
  newArr.push(randomNum); // arr.push() 메서드를 이용해 배열에 요소 추가
}
console.log(newArr); // 요소가 추가된 배열을 출력
console.log(newArr.indexOf(16)); // arr.indexOf() 메서드는 요소가 배열에 없으면 '-1'을 출력한다.