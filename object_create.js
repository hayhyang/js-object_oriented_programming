// 부모 자식 관계를 한 객체를 생성하는 공식적인 문법.
// protolink를 지정하는 방법
// Object.create(객체)
const superObj = { superVal: "super" };
const subObj = Object.create(superObj);
subObj.subVal = "sub";

console.log("subObj.superVal => ", subObj.superVal);
console.log("subObj.subVal => ", subObj.subVal);

const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// const lee = {
//   name: "lee",
//   first: 6,
//   second: 2,
//   avg: function () {
//     return this.sum() / 2;
//   },
// };
// lee.__proto__ = kim;

const lee = Object.create(kim);
lee.name = "lee";
lee.first = 6;
lee.second = 2;
lee.avg = function () {
  return this.sum() / 2;
};

console.log("kim.sum() => ", kim.sum());
console.log("lee.sum() => ", lee.sum());
console.log("lee.avg() => ", lee.avg());
