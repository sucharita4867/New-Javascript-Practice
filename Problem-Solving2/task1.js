function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let number = fare;
  let newNumber = fare + number * (20 / 100) + 30;
  return newNumber;
}
const result = totalFine("Gorib tai ticket katinai");
console.log(result);
