// 상속
// 왜 필요한가? 모든 객체에 사용되지 않는 메서드를 추가할 때 반복되는 코드 없이 추가할 수 있다.

import Person from "./class.js";

class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

const kim = new PersonPlus("kim", 10, 20);

console.log("kim.sum", kim.sum());
console.log("kim.avg", kim.avg());
