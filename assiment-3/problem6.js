/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for (let i = 1; i <= experience; i++) {
  currentSalary = currentSalary + currentSalary * 0.05;
}
newSalary = currentSalary.toFixed(2);
console.log(newSalary);
