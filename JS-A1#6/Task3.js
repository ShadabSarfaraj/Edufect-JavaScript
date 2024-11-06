function removeChars(str, ch) {
  let len = str.length;
  let newStr = "";
  for (let i = 0; i < len; i++) {
    if (str[i] != ch) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(removeChars("abcd", "3"));
