function isGoodExpression(exp) {
  let len = exp.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (exp[i] == "(") {
      count++;
    }
    if (exp[i] == ")") {
      if (count == 0) {
        return false;
      } else {
        count--;
      }
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}
let str = "4+(5+6";
console.log(isGoodExpression(str));
