function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  if (person1.gender == person2.gender) {
    return false;
  }
  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }
  return true;
}
const result = validProposal("Mizan", {
  name: "mitu",
  gender: "male",
  age: 32,
});
console.log(result);
