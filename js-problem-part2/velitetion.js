function velitetion(num1, num2) {
  if (typeof num1 !== "number") {
    return "please provide a number ";
  } else if (typeof num2 !== "number") {
    return "please provide a number";
  }
  const result = num1 * num2;
  return result;
}
// const total = velitetion(8, 3);
// console.log(total);

function calculeter(first, second) {
  if (typeof first !== "string") {
    return "first name should be a string ";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const fullName = first + " " + second;
  return fullName;
}
// const output = calculeter("SUCHARITA", "SARDAR");
// console.log(output);

function getarray(numbers) {
  if (Array.isArray(numbers) === false) {
    return "please provide a array";
  } else {
    return numbers;
  }
  //   const type = typeof numbers;
  //   return type;
}
// const second = getarray([34, 45, 56]);
// const first = getarray({ name: "vivo", price: 1500, color: "sky" });
// console.log(second);
// console.log(first);
