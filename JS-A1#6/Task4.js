function square(num) {
  let ans = 1;
  ans = num * num;
  return ans;
}
function isRightAngleTriangle(a, b, c) {
  let squareSum = square(a) + square(b);
  let squareHypotenuse = square(c);
  if (squareSum == squareHypotenuse) {
    return true;
  } else {
    return false;
  }
}
console.log(isRightAngleTriangle(9,40,41));
