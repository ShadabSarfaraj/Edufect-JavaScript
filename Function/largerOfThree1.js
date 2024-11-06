function largestOfThreeNum(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
  } else if (b > a) {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  } else {
    return c; // When all the three number have same value;
  }
}
let largerNum = largestOfThreeNum(10, 8, 3);
console.log(largerNum);
