// Row 1 - Normal Row, Row 4 - Premium Row
// task 1-------
// Row 1 - Normal Row, Row 4 - Premium Row
// {
//   let sit = 20;
//   let totalIncome = 0;
//   for (let i = 1; i <= sit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       console.log("Row " + i + " - " + "Premium Row");
//       totalIncome = totalIncome + 800;
//     } else {
//       console.log("Row " + i + " - " + " Normal Row");
//       totalIncome = totalIncome + 500;
//     }
//   }
//   console.log("totalIncome :" + totalIncome + " taka");
// }
// task 2--------
// {
//   let productDes = "This ,  wear is now on Sale — ";
//   if (productDes.toLowerCase().includes("cotton")) {
//     console.log("Material: Cotton");
//   } else if (productDes.toLowerCase().includes("sale")) {
//     console.log("Category: Sale Item");
//   } else if (productDes.toLowerCase().includes("new arrival")) {
//     console.log("Status: New Arrival");
//   } else if (productDes.toLowerCase().includes("limited edition")) {
//     console.log("Availability: Limited");
//   } else {
//     console.log("Tag: General");
//   }
// }

// task 3------
let person01 = {
  firstName: "su",
  lastName: "sardar",
  employeeId: 101,
  departmentCode: "HR",
  companyName: "Alphacorp",
};
let smallLastCh = "";
if (person01.lastName.length < 3) {
  smallLastCh = person01.lastName;
} else {
  smallLastCh = person01.lastName.slice(0, 3).toLowerCase();
}
var result =
  "ID : " +
  smallLastCh +
  person01.employeeId +
  "@" +
  person01.companyName.toLowerCase() +
  ".com";
console.log(result);
let password = "";
if (person01.firstName.length < 3) {
  password = person01.firstName;
}
console.log("TempPass : " + password + "#" + person01.departmentCode);

// { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// Output:
// username: doe101@alphacorp.com
// p: jn1#AC
