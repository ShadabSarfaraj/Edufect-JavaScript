let str = "x";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  if (i % 2 == 0) {
    newStr += str[i];
  }
}
console.log(newStr);
