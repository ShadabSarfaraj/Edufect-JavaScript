let n = 1234;
let sum = 0;
while (n > 0) {
  let lastDigit = n % 10;
  sum += lastDigit;
  n -= lastDigit;
  n /= 10;
}
console.log(sum);
