const arr = [12, 5, -6, 10, -9, 4, 0, -23, 34];
const copyArr = [...arr];
const copyArr1 = [...arr];
// a. Sort the numbers in ascending order
arr.sort(sortNumbesAsc);
function sortNumbesAsc(num1, num2) {
  if (num1 > num2) return 1;
  else if (num1 < num2) return -1;
  else return 0;
}
// console.log(arr);

// b. Sort then numbers in descending order
copyArr.sort(sortNumbesDesc);
function sortNumbesDesc(num1, num2) {
  if (num1 > num2) return -1;
  else if (num1 < num2) return 1;
  else return 0;
}
// console.log(copyArr);

// c. sort the number based on their absolute value in ascending order.
copyArr1.sort(sortNumbersAbsAsc);
function sortNumbersAbsAsc(num1, num2) {
  if (num1 < 0) {
    num1 *= -1;
  }
  if (num2 < 0) {
    num2 *= -1;
  }
  if (num1 > num2) return 1;
  else if (num1 < num2) return -1;
  else return 0;
}
console.log(copyArr1);
