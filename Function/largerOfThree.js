function larger(num1, num2) {
  let ans;
  if (num1 > num2) {
    ans = num1;
  } else {
    ans = num2;
  }
  return ans;
}
function largerOfThree(num1, num2, num3) {
  let largerNum;
  if (num1 >= num2) {
    largerNum = larger(num1, num3); // we can include num2 when both num1 , num2 are equal
  } else {
    largerNum = larger(num2, num3);
  }
  return largerNum;
}
console.log(largerOfThree(29,29,29));
