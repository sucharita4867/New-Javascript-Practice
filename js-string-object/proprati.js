let person = {
  name: "rabi",
  age: 34,
  married: true,
  profession: "developer",
  salary: 20000,
};

// dot('.') notetion
// console.log(person.age);
const boyos = person.age;
// console.log(boyos);

// braket( []) notetion
console.log(person["married"]);
const income = person["salary"];
console.log(income);
person.salary = 30;
console.log(person.salary);
