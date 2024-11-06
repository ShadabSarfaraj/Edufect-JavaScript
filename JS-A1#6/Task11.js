function isPrime(num, count) {
  if (num == 1) {
    return count;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return count;
    }
  }
  count++;
  return count;
}
function printNoOfPrime(num) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count = isPrime(i, count);
  }
  return count;
}
let n = 150;
console.log(printNoOfPrime(n));
