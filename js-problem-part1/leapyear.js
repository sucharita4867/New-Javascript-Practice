function leapYear(Year) {
  if (Year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const lipi = leapYear(2004);
console.log(lipi);
