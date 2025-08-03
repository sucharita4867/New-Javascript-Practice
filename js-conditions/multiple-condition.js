// MULTIPLE CONDITION

const price = 2500;
if (price >= 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payamount = discount - price;
  console.log(payamount);
} else if (price >= 2500) {
  // 5 % discount
  const discount = (price * 5) / 100;
  const payamount = discount - price;
  console.log(payamount);
} else {
  console.log(price);
}
