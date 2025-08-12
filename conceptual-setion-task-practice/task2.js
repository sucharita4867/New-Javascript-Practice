function sumOfArray(arr) {
  if (Array.isArray(arr) == false) {
    return "Invalid";
  }
  let sum = 0;
  for (let num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }
    sum = sum + num;
  }
  return sum;
}
const result = sumOfArray([3, 7, 8]);
console.log(result);
