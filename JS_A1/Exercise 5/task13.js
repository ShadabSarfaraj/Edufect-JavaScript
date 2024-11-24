let str = "qwNN*%bT";
let len = str.length;
let digit = "";
let lowerCase = "";
let upperCase = "";
let output = "";
for (let i = 0; i < len; i++) {
  if (str[i] >= "0" && str[i] <= "9") {
    digit += str[i];
  } else if (str[i] >= "a" && str[i] <= "z") {
    lowerCase += str[i];
  } else if (str[i] >= "A" && str[i] <= "Z") {
    upperCase += str[i];
  }
}
output = lowerCase + digit + upperCase;
console.log(output);
