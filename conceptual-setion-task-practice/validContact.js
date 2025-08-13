function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (
    contact.length == 11 &&
    contact.startsWith("01") == true &&
    contact.includes(" ") != true
  ) {
    return true;
  } else {
    return false;
  }
}
const result = validContact(["01819234567"]);
console.log(result);
// --------------------------------------------------------------------
// negative approch
// function validContact(contact) {
//   if (typeof contact !== "string") {
//     return "Invalid";
//   }
//   if (contact.length != 11) {
//     return false;
//   }
//   if (contact.startsWith("01") == false) {
//     return false;
//   }
//   if (contact.includes(" ") == true) {
//     return false;
//   }
//   return true;
// }
// console.log(validContact("01819834567"));
