function evenNO(number) {
  const even = [];
  for (const num of number) {
    console.log(num);
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}
const nums = [4, 5, 7, 8, 2, 6];
// const total = evenNO(nums);
// console.log(total);

function sumOfNo(number) {
  let sum = 0;
  for (const num of number) {
    if (num % 2 === 0) {
      console.log(num);
      sum = sum + num;
    }
  }
  return sum;
}
// const numb = sumOfNo(nums);
// console.log(numb);
const sum = sumOfNo(nums);
console.log("sum no is:", sum);
