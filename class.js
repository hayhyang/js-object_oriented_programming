export default class Person {
  // 객체가 생성될때 초기상태를 만들어주기 위해 실행되는 메서드
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }
}

const kim = new Person("kim", 10, 20);

const lee = new Person("lee", 15, 20);

console.log("kim.sum", kim.sum());
console.log("lee.sum", lee.sum());
