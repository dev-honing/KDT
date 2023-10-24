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