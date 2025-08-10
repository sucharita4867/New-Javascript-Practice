const phones = [
  { name: "sumsung", price: 15000, camera: "12mp", color: "sky" },
  { name: "oppo", price: 20000, camera: "12mp", color: "sky" },
  { name: "vivo", price: 145000, camera: "12mp", color: "sky" },
  { name: "poko", price: 35000, camera: "12mp", color: "sky" },
  { name: "redmi", price: 62000, camera: "12mp", color: "sky" },
  { name: "realmi", price: 1200, camera: "12mp", color: "sky" },
];
function cheapestph(phones) {
  let minph = phones[0];
  for (const phone of phones) {
    if (phone.price < minph.price) {
      minph = phone;
    }
  }
  return minph;
}
// const total = cheapestph(phones);
// console.log("cheapest phones is :", total);
// ------------------------- max cheapestph
function expensiveph(phones) {
  let expensivemobiles = phones[0];
  for (const phone of phones) {
    //     console.log(phone);
    if (phone.price > expensivemobiles.price) {
      expensivemobiles = phone;
    }
  }
  return expensivemobiles;
}
const mostexpensive = expensiveph(phones);
console.log("the most expensive phone of all :", mostexpensive);
