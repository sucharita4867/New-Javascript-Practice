const height = [23, 154, 67, 12, 78, 98, 34, 92];
function maxHeight(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
// const result = maxHeight(height);
// console.log(result);

// home work min
const heights = [23, 15, 4, 7, 12, 78, 98, 34, 2];

function minHeight(numbers) {
  let minNo = numbers[0];
  for (const numb of numbers) {
    if (numb < minNo) {
      minNo = numb;
    }
  }
  return minNo;
}
const result = minHeight(heights);
console.log(result);
