function sum(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}
let n = 20;
console.log("Sum of numbers from 1 to", n, "is", sum(n));
