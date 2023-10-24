const makeObjectOne = (idValue, passwordValue, emailValue) => {
  // 매개변수가 셋인 화살표 함수 생성

  // 리턴 데이터 타입을 객체로 만들고, 
  // key 값에는 정적으로 작성하고 
  // value 값에는 동적으로 작성하도록
  // 함수를 매개변수를 통해 만들었다.
  // '매개변수 인자를 객체에 전달했다"라고 표현한다.
  return {
    id : idValue,
    password : passwordValue,
    email : emailValue
  }

// 함수 makeObjectOne()은 객체를 리턴했기 때문에, result 변수는 사실상 객체를 담은 변수이다.
let result = makeObjectOne("아이디 테스트", "패스워드 테스트", "이메일 테스트");
console.log(result);
};

function makeObjectTwo(idValue, passwordValue, emailValue){
  // 함수를 '선언문' 방식, 기명함수 방식으로 바꾸었고 this 바인딩을 활용해 제작했다.
  this.id = idValue;
  this.password = passwordValue;
  this.email = emailValue;
}

// 함수를 호출할 때 new라는 키워드를 추가했다.
let result = new makeObjectTwo("아이디 테스트", "패스워드 테스트", "이메일 테스트")

// 결과적으로 변수 result는 객체이지만, '함수로부터 만들어진 무언가', '인스턴스(instance)'라고 명명한다.
// 같은 객체이기 때문에 예제 1번과 결과물이 같아 보이지만, '인스턴스'인가 아닌가의 유무에서 완전히 다른 차이가 있다.
console.log(result);