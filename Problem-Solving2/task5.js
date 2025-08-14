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
  let passNo = 0;
  let failNo = 0;
  for (let mark of marks) {
    total += mark;
    if (mark >= 40) {
      passNo++;
    } else {
      failNo++;
    }
  }
  let final = {
    finalScore: sum,
    pass: passNo,
    fail: failNo,
  };
  return final;
}
const result = resultReport(100);
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
