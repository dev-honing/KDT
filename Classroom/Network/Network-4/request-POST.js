const object = {a: 1, b: 1};
console.log(object); // { a: 1, b: 1 }

const {a, b} = object;
console.log({a,b}); // { a: 1, b: 1 } 
// ? 
// -> {a, b}를 출력하면 왜 object가 뜨지 않나?