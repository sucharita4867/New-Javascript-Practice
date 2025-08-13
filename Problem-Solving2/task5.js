function resultReport(marks) {
  let marksSum = 0;
  for (const num of marks) {
    marksSum = marksSum + num;
  }
  let newSum = marksSum / marks.length;
  // console.log(Math.round(newSum));
  let pass = [];
  let fail = [];
  for (const mark of marks) {
    if (mark > 40) {
      pass.push(mark);
    } else {
      fail.push(mark);
    }
  }
  return pass, fail;
}

const result = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(result);
