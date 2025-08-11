function discount(quentity) {
  //   let total = 0;
  if (quentity <= 100) {
    let total = quentity * 100;
    return total;
  } else if (quentity <= 200) {
    let total = quentity * 90;
    return total;
  } else if (quentity <= 300) {
    let total = quentity * 70;
    return total;
  } else {
    let total = quentity * 50;
    return total;
  }
}
const result = discount(201);
console.log(result);
