let str = "qwNN*%bT";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  if (str[i] >= 0 && str[i] <= 9) {
    newStr += "0";
  } else if (str[i] >= "a" && str[i] <= "z") {
    newStr += "a";
  } else if (str[i] >= "A" && str[i] <= "Z") {
    newStr += "A";
  }
  else{
    newStr+=str[i];
  }
}
console.log(newStr);
