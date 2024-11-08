function findMaxEle(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [25,20,14,2,7,21];
console.log("MAX =",findMaxEle(arr));
