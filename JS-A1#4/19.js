let num = 2;
let divide = "Divide : ";
let notDivide = "Not Divide : ";
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divide += i + "#";
  } else {
    notDivide += i + "#";
  }
}
console.log(divide);
console.log(notDivide);
