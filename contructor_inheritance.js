function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// prototype을 사용해 Person을 통해 생성된 객체가 공통으로 사용하는 메서드 생성
Person.prototype.sum = function () {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  // call은 super와 같은 역할을 한다.
  // 자바스크립트 객체지향의 핵심은 this이다.
  Person.call(this, name, first, second);
  this.third = third;
}

PersonPlus.prototype.avg = function () {
  return (this.sum() + this.thrid) / 3;
};
