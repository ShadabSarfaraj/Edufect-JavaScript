function compareBracket(str) {
  let len = str.length;
  let countOpenParanthesis = 0;
  let countCloseParenthesis = 0;

  for (let i = 0; i < len; i++) {
    if (str[i] == "(") {
      countOpenParanthesis++;
    }
    if (str[i] == ")") {
      countCloseParenthesis++;
    }
  }
  if (countCloseParenthesis == countOpenParanthesis) {
    return true;
  } else {
    return false;
  }
}
let str = "4+5)+6";
console.log(compareBracket(str));
