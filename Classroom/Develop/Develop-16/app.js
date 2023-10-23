const _pokemon = {
  pokemonName: "피카츄",
  type: "전기",
  level: 42,
  skills: ["10만 볼트", "전광석화", "아이언테일", "볼트태클"]
};


const { pokemonName, type } = _pokemon;

// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
// (객체 접근 방식을 채택해서 작성함)
// JavaScript뿐만 아니라, 다른 언어에서도 많이 사용하는 방식

console.log(_pokemon.pokemonName); // 피카츄
console.log(_pokemon.type); // 전기