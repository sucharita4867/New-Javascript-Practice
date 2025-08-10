// table --> 3
// bed --> 2
// chair --->4
function woods(chairquentity, bedquentity, tablequentity) {
  const chairwoods = 3;
  const bedwoods = 2;
  const tablewoods = 40;

  const chairresult = chairquentity * chairwoods;
  const bedresult = bedquentity * bedwoods;
  const tableresult = tablequentity * tablewoods;
  const allWoodstotal = chairresult + bedresult + tableresult;
  return allWoodstotal;
}
// const wood = woods(3, 2, 1);
// console.log(wood);

// home work
// shirt price = 500
// pant price = 300
// shoe price = 900

function price(shirtquentity, pantquentity, shoequentity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;

  const shirtPic = shirtquentity * shirtPrice;
  const pantPic = pantquentity * pantPrice;
  const shoePic = shoequentity * shoePrice;

  const allShopping = shirtPic + pantPic + shoePic;
  return allShopping;
}
const shooping = price(2, 1, 1);
console.log(shooping);
