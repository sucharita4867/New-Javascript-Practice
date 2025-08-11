function add(num1, num2) {
  const total = num1 + num2;
  return total;
}
function subtract(num1, num2) {
  const total = num1 - num2;
  return total;
}
function multiple(num1, num2) {
  const total = num1 * num2;
  return total;
}
function divide(num1, num2) {
  const total = num1 / num2;
  return total;
}
function calculeter(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiple") {
    const result = multiple(a, b);
    return result;
  } else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return 'only "add", "subtract", "multiple", "divide" operation is allowed';
  }
}
const output = calculeter(2, 4, "divide");
console.log(output);
