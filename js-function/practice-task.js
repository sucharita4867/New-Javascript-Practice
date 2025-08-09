// -----------------------------------practice-task 1
// function number(a, b, c, d) {
//   const total = a * b * c * d;
//   return total;
// }
// const result = number(23, 41, 18, 39);
// console.log(result);

// --------------------------------practice task 2
// let total = 0;
// function numbers(num) {
//   if (num % 2 === 1) {
//     total = num * 2;
//   } else {
//     total = num / 2;
//   }
//   return total;
// }
// const result = numbers(81);
// console.log(result);

// ----------------------------------practice task 3 (incomplete)
// ----------------------------------practice task 4(incomplete)
// const total = [];
// function stringIntiger(str) {
//   for (const string of str) {
//     console.log(string);
//     if (string === 0) {
//       total.push(string);
//     } else {
//       console.log(string);
//     }
//     return total;
//   }
// }
// const result = stringIntiger("30040");
// console.log(result);
// ---------------------------------------practice task 5
function even_odd(nums) {
  if (nums % 2 === 0) {
    return "Even No";
  } else {
    return "Odd No";
  }
}
const result = even_odd(52);
console.log(result);
