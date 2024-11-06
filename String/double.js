// Given a string, create a new string in which each character has been doubled. e.g. abc => aabbcc
let str = "12";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  newStr += str[i] + str[i];
}
console.log(newStr);
