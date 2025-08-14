function resultReport(marks) {
  // 1fine avarage of marks
  let marksSum = 0;
  for (const num of marks) {
    marksSum = marksSum + num;
  }
  let newSum = marksSum / marks.length;
  let sum = Math.round(newSum);
  let marksIndex = 0;
  for (const num of marks) {
    if (num >= 40) {
      console.log(num);
    }
  }
  // let final = {
  //   finalScore: sum,
  // };
  // return final;
}
const result = resultReport([98, 87, 67, 91, 92, 33, 87]);
// console.log(result);
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
