let str = "Hello123";
let len = str.length;
let newStr = "";
for (i = 0; i < len; i++) {
  if (str[i] != "m") {
    newStr += str[i];
  }
}
console.log(newStr);
