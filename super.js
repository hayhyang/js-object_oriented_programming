import PersonPlus from "./inheritance.js";

// super
// 객체에 새로운 속성을 추가하고 싶을때 상속받은 부모클래스와 중복되는 속성과 메서드를 대체할 수 있다.

class PersonSuper extends PersonPlus {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }

  avg() {
    return this.sum() / 3;
  }
}

const kim = new PersonSuper("kim", 10, 20, 14);

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
