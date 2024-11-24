let str = "AXBYCXDY";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  if (
    (str[i] == "X" && str[i - 1] == "X") ||
    (str[i] == "Y" && str[i - 1] == "Y")
  ) {
    // do nothing
  } else if (
    (str[i] == "X" && str[i - 1] != "X") ||
    (str[i] == "Y" && str[i - 1] != "Y")
  ) {
    newStr += str[i];
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
