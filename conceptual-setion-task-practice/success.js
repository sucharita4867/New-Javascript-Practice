function willSuccess(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  let totalno = 0;
  let passno = 0;
  let failno = 0;
  for (const mark of marks) {
    totalno += mark;
    if (mark >= 50) {
      passno++;
    } else {
      failno++;
    }
  }
  if (passno > failno) {
    return true;
  }
  if (failno > passno || failno === passno) {
    return false;
  }
}
const result = willSuccess(90);
console.log(result);
