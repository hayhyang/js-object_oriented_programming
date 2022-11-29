// call
const kim = {
  name: "kim",
  first: 10,
  second: 20,
};

const lee = {
  name: "lee",
  first: 10,
  second: 10,
};

// lee.__proto__ = kim;
function sum(prefix = 10) {
  return prefix + (this.first + this.second);
}

// javascript에서 모든 함수는 객체이기 때문에 call이라는 메서드를 가지고 있다.
// call 의 첫번째 인자는 객체, 두번째부터는 함수의 인자가 들어간다.
// call은 실행할때 마다 this값(context값)을 바꾼다.
console.log(sum.call(kim, 3));
console.log(sum.call(lee, 4));

// bind
// call과 비슷하지만 sum은 영향을 받지 않고 새로운 함수가 생성된다.
// call 과 마찬가지로 인자를 받을 수 있다.
const kimSum = sum.bind(kim, "=> ");
console.log("kimSum", kimSum());

// call, bind는 둘 다 this 값을 바꾸는 역할을 한다. call은 임시로 bind는 영구적으로 값을 바꾼다.
// call은 실행하는 순간 그 함수가 참조하는 this의 값을 바꾸고 bind는 그 함수를 새로운 함수로 return해 새로운 함수의 this 값을 바꾼다.
// call, bind 공통점: 첫번째 인자로 this값을 받는다. 차이점: call은 this값을 바꾼 후 호출, bind는 this값을 고정시키는 새로운 함수 생성

// call, bind 둘다 함수의 this값을 넣어준다. call은 함수가 실행되는 순간 지정된 this값을 사용하고 bind는 고정된 this값을 갖는 새로운 함수를 생성한다.
