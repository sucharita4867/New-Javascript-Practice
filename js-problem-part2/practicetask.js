const heights2 = [167, 190, 120, 165, 137];
function minHeight(heights2) {
  let minHeight = heights2[0];
  for (const num of heights2) {
    //     console.log(num);
    if (num < minHeight) {
      minHeight = num;
    }
  }
  return minHeight;
}
const result = minHeight(heights2);
console.log(result);
