// prototype: 원형

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

// Person객체의 메서드로 지정할 수 있다.
// 장점: 객체가 생성될때마다 호출되지 않아 메모리절약 효과
Person.prototype.sum = function () {
  return this.first + this.second + this.third;
};

const kim = new Person("kim", 10, 20, 51);
// 개벌적으로 메서드를 수정할 수 있다
kim.sum = function () {
  return "modified " + (this.first + this.second + this.third);
};
const lee = new Person("lee", 3, 4, 5);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
