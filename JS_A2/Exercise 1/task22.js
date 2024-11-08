function findLargestEleIndex(arr) {
  const len = arr.length;
  let max = 0;
  let maxEleIndex = 0;
  for (let i = 0; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxEleIndex = i;
    }
  }
  return maxEleIndex;
}

let arr = [25,20,14,2,7,21];
const position = findLargestEleIndex(arr);
arr.splice(position, 1);
console.log(arr);
