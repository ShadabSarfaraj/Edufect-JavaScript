function countChars(str, ch) {
  let len = str.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == ch) {
      count++;
    }
  }
  return count;
}
function countOfMaxOccChar(str) {
  let len = str.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let count = countChars(str,str[i]);
    if (max < count) {
      max = count;
    }
  }
  return max;
}
console.log(countOfMaxOccChar("ddddd"));
