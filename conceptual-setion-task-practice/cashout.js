function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return "Invalid";
  }
  let cash = money * (1.75 / 100);
  let finalcash = cash.toFixed(4);
  let originalcash = parseFloat(finalcash);
  return originalcash;
}
const result = cashOut(1000);
console.log(result);
