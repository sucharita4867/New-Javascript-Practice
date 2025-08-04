/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (fileName.includes(".pdf")) {
  console.log("Store");
} else if (fileName.includes("#")) {
  console.log("Store");
} else if (fileName.includes(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}
