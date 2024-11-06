let num = 1;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  if (num == 1) {
    console.log("1 is neither prime nor composite");
  } else {
    console.log("Prime");
  }
} else {
  console.log("Composite");
}
