let str = "az+bz=4";
let newStr = "";
let len = str.length;
for (let i = 0; i < len; i++) {
  if (str[i] == "z") {
    newStr += "x";
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
