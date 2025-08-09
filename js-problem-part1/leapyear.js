// SIMPLE LOGIC :
// year will be e leap year if the year is divisible by 4
function leapYear(Year) {
  if (Year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const lipi = leapYear(2004);
console.log(lipi);

// 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
// 2.if the year is divisible by 400, them it is a leap
// 3. else it is not a leap year

function leapOfYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLeap1 = leapOfYear(2100);
const isLeap2 = leapOfYear(2014);
const isLeap3 = leapOfYear(2400);
const isLeap4 = leapOfYear(2054);
const isLeap5 = leapOfYear(1900);
console.log(isLeap1, isLeap2, isLeap3, isLeap4, isLeap5);
