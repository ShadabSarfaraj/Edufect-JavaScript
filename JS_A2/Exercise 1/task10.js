const arr1 = [2,4,6,8];
const arr2 = [20];
let sum1 = 0; // sum of all the elements of first array.
let sum2 = 0; // Sum of all the elements of second array
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
for (let j = 0; j < arr2.length; j++) {
  sum2 += arr2[j];
}
if (sum1 > sum2) {
  console.log("Big1");
} else if (sum2 > sum1) {
  console.log("Big2");
} else {
  console.log("Equal");
}
