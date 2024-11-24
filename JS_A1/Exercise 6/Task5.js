function isTriangle(a, b, c) {
  let str;
  if (a + b > c && b + c > a && a + c > b) {
    str = true;
  } else {
    str = false;
  }
  return str;
}
console.log(isTriangle(7,10,5));
