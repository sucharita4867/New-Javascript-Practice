function onlyCharacter(str) {
  if (typeof str != "string") {
    return "Invalid";
  }
  let newSte = str.split(" ").join("").toUpperCase();
  return newSte;
}
const result = onlyCharacter(true);
console.log(result);
