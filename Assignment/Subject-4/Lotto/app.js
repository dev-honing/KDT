// entry 파일

// 번호 추첨을 위한 로직 작성
// 1. 배열로 출력해보기(1~10)
const LottoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 소숫점을 제거하기 위해 Math.floor() 메서드 안쪽에 로직을 넣어보자
const LottoRandom = Math.random(LottoArr)*100;
const floorLottoRandom = Math.floor(LottoRandom);
console.log(floorLottoRandom); // 1~100까지의 정수가 출력되는 것으로 보인다.

