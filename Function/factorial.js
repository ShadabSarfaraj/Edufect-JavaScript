function factorial(num) {
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans *= i;
  }
  return ans;
}
let num = -3;
printFactorial(num);
function printFactorial(num) {
  for (let i = 1; i <= num; i++) {
    console.log("Factorial of", i, "is", factorial(i));
  }
}
