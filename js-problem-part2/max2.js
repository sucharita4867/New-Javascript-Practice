const jim = 123;
const tim = 245;
const kim = 89;
// if (jim > tim && jim > kim) {
//   console.log("jim is the boss");
// } else if (tim > jim && tim > kim) {
//   console.log("tim is the boss boss");
// } else {
//   console.log("kim is the boss boss boss");
// }
// ----------------- function declear
function setmax(jim, tim, kim) {
  if (jim > tim && jim > kim) {
    return "jim is the boss";
  } else if (tim > jim && tim > kim) {
    return "tim is the boss boss";
  } else {
    return "kim is the boss boss boss";
  }
}
// const result = setmax(334, 156, 78);
// console.log(result);

const total = Math.max(23, 45, 67, 87, 4, 2, 78);
console.log(total);
