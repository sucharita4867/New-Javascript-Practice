function resultReport(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  let marksSum = 0;
  for (const num of marks) {
    marksSum = marksSum + num;
  }
  let newSum = marksSum / marks.length;
  let sum = Math.round(newSum);
  let total = 0;
  let passno = 0;
  let failno = 0;
  for (let mark of marks) {
    total += mark;
    if (mark >= 40) {
      passno++;
    } else {
      failno++;
    }
  }
  let final = {
    finalScore: sum,
    pass: passno,
    fail: failno,
  };
  return final;
}
const result = resultReport([]);
console.log(result);
// --------------------------------------
//   let sleepSecond = sum;
//   let hour = Math.floor(sleepSecond / 3600);
//   sleepSecond = sleepSecond % 3600;
//   let minute = Math.floor(sleepSecond / 60);
//   sleepSecond = sleepSecond % 60;

//   let result = {
//     hour: hour,
//     minute: minute,
//     second: sleepSecond,
//   };
//   return result;
// }
