function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function hasPrime(numbers) {
  let len = numbers.length;
  let check;
  for (let i = 0; i < len; i++) {
    check = isPrime(numbers[i]);
    if (check) {
      return true;
    }
  }
  return false;
}
let numbers = [25,10,12];
console.log(hasPrime(numbers));
