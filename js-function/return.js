function tenTime(number) {
  const result = number + 10;
  return result;
}
const output = tenTime(5);
// console.log(output);

function multipleTen(num) {
  const result = num * 10;
  return result;
}
// const outputs = multipleTen(50);
// console.log(outputs);
// ------- normal return   ----------
function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
// const result = add(40, 80);
// console.log(result);

//--------- return short cut ---------
function add2(price1, price2) {
  return price1 + price2;
}
// const total = add2(30, 50);
// console.log(total);
// --------------------------------------------
function doMath(number) {
  const sum = number + 10;
  const diff = number - sum;
  const multiple = number * diff;
  const divition = multiple / 2;
  return divition;
}
const total = doMath(60);
console.log(total);
