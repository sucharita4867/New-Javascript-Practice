function evenSized(str) {
  const sized = str.length;
  //   console.log(str, sized);
  if (sized % 2 === 0) {
    return true;
  }
  return false;
}
const output = evenSized("sucharita");
// console.log(output);
// console.log(evenSized("riya"));
// evenSized("sucharita");
// evenSized("racho");

function doubleOrTriple(number, double) {
  if (double === true) {
    const total = number * 2;
    return total;
  } else {
    const total = number * 3;
    return total;
  }
}
// console.log(doubleOrTriple(4, true));
// console.log(doubleOrTriple(4, false));

function lengthOfArray(numbers) {
  const len = numbers.length;
  return len;
}
lengthOfArray([2, 45, 12, 75, 12]);
