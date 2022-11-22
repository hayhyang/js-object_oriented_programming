// constructor funtion(생성자 함수)를 사용해서 객체를 생성

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

const kim = new Person("kim", 10, 20, 51);
kim.sum = function () {
  return "modified " + (this.first + this.second + this.third);
};
const lee = new Person("lee", 3, 4, 5);
lee.sum = function () {
  return "modified " + (this.first + this.second + this.third);
};

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
