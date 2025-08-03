let person = {
  name: "rabi",
  age: 34,
  married: true,
  profession: "developer",
  salary: 20000,
};

// console.log(person["profession"]);
// person["profession"] = "devof";
// const professions = person["offiser"];
// console.log(profession["professions"]);
// console.log(person);
const propname = "profession";
person[propname] = "devofs";
console.log(person);
