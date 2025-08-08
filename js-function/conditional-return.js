function condition(number) {
  if (number % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}
// const total = condition(4);
// console.log(total);
// console.log(condition(4));

// -----------------------short from ------------
function oddNo(number) {
  if (number % 2 === 1) {
    return "true";
  }
  return "false";
}
console.log(oddNo(5));
console.log(oddNo(8));
