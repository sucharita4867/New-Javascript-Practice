function somOfNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    console.log(num);
    sum = sum + num;
  }
  return sum;
}
const numbs = [23, 43, 54, 56];
const sum = somOfNumbers(numbs);
console.log("sum no is :", sum);
