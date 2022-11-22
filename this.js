// this는 해당 객체 내에서 참조할 때 사용

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

console.log(kim.sum());
