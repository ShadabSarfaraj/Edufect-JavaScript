function reverseString(str) {
  let reversedString = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
let str = "123456789";
console.log(reverseString(str));
