// entry 파일

// 번호 추첨을 위한 로직 작성
// 1. 배열로 출력해보기(1~10)
const LottoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 소숫점을 제거하기 위해 Math.floor() 메서드 안쪽에 로직을 넣어보자
const LottoRandom = Math.random(LottoArr)*10;
const floorLottoRandom = Math.floor(LottoRandom);
// console.log(floorLottoRandom);

// 3개를 뽑기 위해 함수에 넣고 출력을 3번 한다.
function Lotto(){
  console.log(floorLottoRandom);
  console.log(floorLottoRandom);
  console.log(floorLottoRandom);
}
Lotto(); // 세 숫자가 중복되게 출력된다;; 
// 중복되지 않은 숫자를 출력하려면 어떻게 해야할까?