let str = "1+2+3+4";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  if (str[i] != "+") {
    newStr += str[i];
  } else if (str[i] == "+" && str[i - 1] == "+") {
    //do nothing
  } else if (str[i] == "+" && str[i - 1] != "+") {
    newStr += str[i];
  }
}
console.log(newStr);
