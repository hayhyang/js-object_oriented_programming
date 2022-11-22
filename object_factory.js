let kim = {
  name: "kim",
  first: 10,
  second: 20,
  third: 3,
  sum: function () {
    return this.first + this.second + this.third;
  },
};

let lee = {
  name: "lee",
  first: 23,
  second: 16,
  third: 30,
  sum: function () {
    return this.first + this.second + this.third;
  },
};

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
