// Write a function that returns larger of two numbers.
function larger(num1, num2) {
  console.log("Parameters are", num1, num2);
  let largerNum;
  if (num1 > num2) { // if(num1 >= num2)
    console.log("if");
    largerNum = num1;
  } else {
    console.log("else");
    largerNum = num2;
  }
  return largerNum;
}
let num1 = 25;
let num2 = 25;
let largeNum = larger(num2, num1);
console.log(largeNum);
