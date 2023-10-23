//  구조 분해 할당
const _pokemon = {
  pokemonName: "피카츄",
  type: "전기",
  level: 42,
  skills: ["10만 볼트", "전광석화", "아이언테일", "볼트태클"]
};


const { pokemonName, type } = _pokemon;

// * 의미
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
// (객체 접근 방식을 채택해서 작성함)
// JavaScript뿐만 아니라, 다른 언어에서도 많이 사용하는 방식

console.log(_pokemon.pokemonName); // 피카츄
console.log(_pokemon.type); // 전기

// * 장점
// 구조 분해 할당 방식: 구조를 분해하여, 변수로 할당(만드는) 방식
// 복잡한 객체를 다룰 때에 코드를 간결하게 작성할 수 있도록
// 모던 JavaScript에서 지원하고 있음

// * 효용성과 쓰임
// 본 예제와 같은 경우에 큰 의미는 없지만, 프로토콜과 관련된 큰 객체를 다루면서
// 특정 속성만 사용하기를 원하는 등, '억양'에 따라 코드 자체의 직관성을 높일 수 있음

console.log(pokemonName); // 피카츄
console.log(type); // 전기

// ? 일반적인 출력 방식과 차이점?
// 결과적으로는 두 방식 모두 동일한 결과를 출력함
// ! ('변수' 선언 방식)과 (객체로부터 '변수'처럼 사용하는 방식)의 차이