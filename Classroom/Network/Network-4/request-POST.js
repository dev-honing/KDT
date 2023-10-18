const object = {a: 1, b: 2};
console.log(object); // { a: 1, b: 2 }

// 디버거 확인
// a: undefined, b: undefined
// object: {a: 1, b: 2}

const {a, b} = object;
console.log({a,b}); // { a: 1, b: 2 } 

// 디버거 확인
// a: 1, b: 2
// object: {a: 1, b: 2}
// ! a와 b의 value가 생겼음