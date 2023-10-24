// 예제 1번
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
let result1 = makeObjectOne("아이디 테스트", "패스워드 테스트", "이메일 테스트");
console.log(result1);
};

// 예제 2번
function makeObjectTwo(idValue, passwordValue, emailValue){
  // 함수를 '선언문' 방식, 기명함수 방식으로 바꾸었고 this 바인딩을 활용해 제작했다.
  this.id = idValue;
  this.password = passwordValue;
  this.email = emailValue;
}

// 함수를 호출할 때 new라는 키워드를 추가했다.
let result2 = new makeObjectTwo("아이디 테스트", "패스워드 테스트", "이메일 테스트")

// 결과적으로 변수 result는 객체이지만, '함수로부터 만들어진 무언가', '인스턴스(instance)'라고 명명한다.
// 같은 객체이기 때문에 예제 1번과 결과물이 같아 보이지만, '인스턴스'인가 아닌가의 유무에서 완전히 다른 차이가 있다.
console.log(result2);

//
// 에제 2번과 완전히 동일한 동작, 동일한 인스턴스 결과물을 만들어내는 함수다.
// 결과물이 같고 접근 방식도 비슷하지만, '작성법'이 결정적으로 다르다.

// 여기서 작성된 class는 CSS의 class 작성법과 다르다
// 객체지향언어(사실상 모든 작성을 객체로만 해야 하는) JAVA에서 벤치마킹한 JavaScript의 새로운 문법이다.

// 2번의 문제는 일반 함수와의 구분이 '가시적'으로 어렵다는 문제점 때문에
// 자바스크립트의 최신 버전에서는 '인스턴스'를 만드는 함수의 새로운 작성법을 도입해 일반함수 작성법과 구별하고 있다.
//

// 예제 3번
class MakeObjectThree {
  // class는 매개변수 자리가 없고 '블럭 스코프'를 이야기하는 중괄호를 작성한다.
    
    // 매개변수는 특정 함수인 constructor() 자리에 배치하며,
    // constructor라는 이름은 작명할 수 없다. 위 클래스명을 작명한다.
    constructor (idValue, passwordValue, emailValue) {
      this.id = idValue;
      this.password = passwordValue;
      this.email = emailValue;
    }

}

let result3 = new MakeObjectThree("아이디 테스트", "패스워드 테스트", "이메일 테스트");

console.log(result3);