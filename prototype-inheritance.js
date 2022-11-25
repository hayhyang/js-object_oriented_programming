const superObj = { superVal: "super" };
const subObj = { subVal: "sub" };

// __proto__는 서로 관련이 없는 객체의 상속관계를 지정해 줄 수 있다.
// subObj의 원형, 부모객체로 superObj를 지정하여 속성 값을 가져올 수 있음
subObj.__proto__ = superObj;

console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);

subObj.superVal = "sub";

console.log("subObj.superVal => ", subObj.superVal);
console.log("superObj.superVal => ", superObj.superVal);
