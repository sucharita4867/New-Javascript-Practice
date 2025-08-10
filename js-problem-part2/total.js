const phones = [
  { name: "sumsung", price: 15, camera: "12mp", color: "sky" },
  { name: "oppo", price: 20, camera: "12mp", color: "sky" },
  { name: "vivo", price: 14, camera: "12mp", color: "sky" },
  { name: "poko", price: 3, camera: "12mp", color: "sky" },
  { name: "redmi", price: 62, camera: "12mp", color: "sky" },
  { name: "realmi", price: 1, camera: "12mp", color: "sky" },
];
function price(phones) {
  //   console.log(phones);
  let sum = 0;
  for (const phone of phones) {
    //     console.log(phone);
    sum = sum + phone.price;
  }
  return sum;
}
const total = price(phones);
console.log(total);
