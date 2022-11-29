function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// prototype을 사용해 Person을 통해 생성된 객체가 공통으로 사용하는 메서드 생성
Person.prototype.sum = function () {
  return this.first + this.second;
};

// PersonPlus.prototype.__proto__ = Person.prototype;
// 아래 코드로 대체할 수 있으나 Object.create를 사용하면 새로운 객체가 생성된다는 점이 다르다.
// 새로 prototype객체를 생성해서 교체해버리기 때문에 나중에 지정해준 prototype method와 순서가 바뀔경우 리셋되어 오류가 날 수 있다.
// __proto__를 사용하면 순서 상관없이 작동하지만 미표준 문법이기 때문에 아래 문법을 사용하는 것이 좋다.
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

function PersonPlus(name, first, second, third) {
  // call은 super와 같은 기능을 한다.
  // 자바스크립트 객체지향의 핵심은 this이다.
  Person.call(this, name, first, second);
  this.third = third;
}

PersonPlus.prototype.avg = function () {
  return (this.sum() + this.third) / 3;
};

const kim = new PersonPlus("kim", 10, 20, 5);
console.log("kim: ", kim, kim.avg());
console.log("kim constructor", kim.constructor);
