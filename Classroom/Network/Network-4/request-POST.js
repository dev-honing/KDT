const object = {a: 1, b: 2};
console.log(object); // { a: 1, b: 2 }

const {a, b} = object;
console.log({a,b}); // { a: 1, b: 2 } 
// ? 
// -> {a, b}를 출력하면 왜 object가 뜨지 않나?