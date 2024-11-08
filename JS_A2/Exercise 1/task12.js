function checkSameOrDifferent(arr) {
  const check = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (check != arr[i]) {
      return "DIFFERENT";
    }
  }
  return "ALL SAME";
}
let arr = [3,3,6,3];
console.log(checkSameOrDifferent(arr));
