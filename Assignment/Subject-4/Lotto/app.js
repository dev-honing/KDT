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

// 중복을 피하기 위해 요소를 확인하고 없으면 넣어준다
const newArr = [];
for (i=0; i<3; i++){
  randomNum = Math.floor(Math.random()*15+1);
  // randomNum이 newArr에 없을 때 쓰는 조건식
  if(newArr.indexOf(randomNum) === -1 ){
    newArr.push(randomNum); // randomNum을 newArr 배열에 추가
  }
}
console.log(newArr); // ? 중복된 요소가 있으면 뽑지를 않는 문제 발생!