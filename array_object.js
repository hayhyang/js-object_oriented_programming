const memberArray = ["memberA", "memberB", "memberC"];

console.log("memberArray[2]", memberArray[2]);

const memberObject = {
  manager: "memberA",
  developer: "memberB",
  designer: "memberC",
};

memberObject.designer = "memberD";

console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);
console.log("memberObject.manager", memberObject.manager);

delete memberObject.manager;

console.log("after delete memberObject.manager", memberObject.manager);
