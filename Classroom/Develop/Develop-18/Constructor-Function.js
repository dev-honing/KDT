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
};