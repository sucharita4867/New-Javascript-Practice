// function takes an array as parameter give me the average of the odd numbers in the array

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  //   odds it the array that contains only the odd numbers
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    console.log(number);
    sum = sum + number;
  }
  const total = odds.length;
  console.log(sum, total);
  const avg = sum / total;
  return avg;
}
// const numbers = [23, 34, 45, 56, 67, 89, 99, 3];
// const avg = oddAverage(numbers);
// console.log("average on the odd numbers :", avg);

// ---------------------------- even no average -------------------
function evenAverage(numbers) {
  //   console.log(numbers);
  const evens = [];
  for (const number of numbers) {
    //     console.log(number);
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  //   evens it the array that contains only the even numbers
  //   console.log(evens);
  let sum = 0;
  for (const number of evens) {
    console.log(number);
    sum = sum + number;
  }
  const num = evens.length;
  console.log(sum, num);
  const avg = sum / num;
  return avg;
}
const evenno = [23, 34, 56, 67, 78, 84, 26];
const avg = evenAverage(evenno);
console.log("average on the even no :", avg);
