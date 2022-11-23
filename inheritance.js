// 상속
// 왜 필요한가?
// 어떤걸 할 수 있는가?

import Person from "./class";

class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

const kim = new PersonPlus("kim", 10, 20);

console.log("kim.sum", kim.sum());
console.log("kim.avg", kim.avg());
