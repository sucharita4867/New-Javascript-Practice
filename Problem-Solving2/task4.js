function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  if (arr1.length == arr2.length) {
    return true;
  } else {
    return false;
  }
}
const result = isSame([1, 2, 3], [1, 2, 3]);
console.log(result);
