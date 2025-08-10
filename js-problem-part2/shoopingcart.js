const phones = [
  { name: "sumsung", price: 15, camera: "12mp", color: "sky", quentity: 2 },
  { name: "oppo", price: 20, camera: "12mp", color: "sky", quentity: 3 },
  { name: "vivo", price: 14, camera: "12mp", color: "sky", quentity: 5 },
  { name: "poko", price: 3, camera: "12mp", color: "sky", quentity: 1 },
  { name: "redmi", price: 62, camera: "12mp", color: "sky", quentity: 5 },
  { name: "realmi", price: 1, camera: "12mp", color: "sky", quentity: 6 },
];
function price(phones) {
  let sum = 0;
  for (const phone of phones) {
    const addQuentity = phone.price * phone.quentity;
    sum = sum + addQuentity;
  }
  return sum;
}
const total = price(phones);
console.log(total);
