// write a function that calculate sum of square of two number.
function square(n1) {
  let ans = n1 * n1;
  return ans;
}
function sumOfSquare(num1, num2) {
  let sum = square(num1) + square(num2);
  console.log("Sum is", sum);
}
let n1 = 4;
let n2 = 5;
sumOfSquare(n1, n2);
