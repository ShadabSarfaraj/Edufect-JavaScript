let arr = [2,4,6,8,6,4,2];
const first = 0;
let last = arr.length - 1;
if (arr[first] > arr[last]) {
  console.log("First:", arr[first]);
} else if (arr[first] < arr[last]) {
  console.log("Last:", arr[last]);
} else {
  console.log("Equal:", arr[last]);
}
