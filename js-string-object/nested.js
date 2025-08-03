let person = {
  name: "rabi",
  age: 34,
  married: true,
  profession: "developer",
  salary: 20000,
  school: {
    teacher: ["rem", "lalu", "volu"],
  },
};
console.log(person.school.teacher);
person.school.teacher[2] = "kalu";
console.log(person.school.teacher);
