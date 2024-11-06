let str = "qwNN*%bT";
let len = str.length;
let newStr = "";
for (i = 0; i < len; i++) {
  if (str[i] >= "0" && str[i] <= "9") {
    newStr += str[i] + str[i] + str[i];
  } else if (
    (str[i] >= "a" && str <= "z") ||
    (str[i] >= "A" && str[i] <= "Z")
  ) {
    newStr += str[i] + str[i] ;
  }
}
console.log(newStr);
