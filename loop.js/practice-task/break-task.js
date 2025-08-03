// task 1
// {
//   for (let i = 1; i <= 200; i++) {
//     console.log(i);
//     if (i == 100) {
//       break;
//     }
//   }
// }
// task 2
let total = 0;
for (let i = 1; i <= 200; i++) {
  //   console.log(i);
  total += i;
  if (total >= 100) {
    break;
  }
}
console.log("sum no :", total);
