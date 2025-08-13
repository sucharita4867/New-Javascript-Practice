function isSame(arr1, arr2) {
  if (typeof arr1 == "array" || typeof arr2 == "array") {
    return "Invalid";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      newArray = false;
      return false;
    }
  }
  if (arr1.length == arr2.length) {
    return true;
  } else {
    return false;
  }
}
const result = isSame([2, 5, 6], 256);
console.log(result);

// if (arr1 !== arr2) {
//     return true;
//   } else {
//     return false;
//   }
