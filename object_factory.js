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
const lee = new Person("lee", 3, 4, 5);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
