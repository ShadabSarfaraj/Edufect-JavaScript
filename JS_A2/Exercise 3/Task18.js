let array = ["b1b2b3a","a125","a80zz"];
function sortAccToNumbers(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  let strNum1 = Number(retrieveNum(str1, len1)); // the value returned from the function is string so converting it into number using Number()
  let strNum2 = Number(retrieveNum(str2, len2));
  return strNum1 - strNum2;
}
function retrieveNum(str, len) {
  let numString = "";
  for (let i = 0; i < len; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      numString += str[i];
    }
  }
  return numString;
}
array.sort(sortAccToNumbers);
console.log(array);
