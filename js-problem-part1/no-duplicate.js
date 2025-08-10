//  array te kono duplcate numbre thakbe na thakle new array te cete jabe

let friends = ["anu", "nil", "rani", "rimi", "anu", "nil", "rimi", "rani"];
let numbers = [44, 53, 23, 65, 53, 67, 78, 44, 23, 53, 65, 44, 23, 53];
function noDuplicate(numbers) {
  let unic = [];
  for (const num of numbers) {
    //     console.log(num);
    if (unic.includes(num) === false) {
      unic.push(num);
    }
  }
  return unic;
}
// const result = noDuplicate(numbers);
// console.log(result);
// ----------------------------------------------
function duplcateNo(friends) {
  console.log(friends);
}
const result = duplcateNo(friends);
console.log(result);
