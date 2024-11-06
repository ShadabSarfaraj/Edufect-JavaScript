let str = "qwNN*%bT";
let len = str.length;
let digit = "";
for (let i = 0; i < len; i++) {
  if (str[i] >= "0" && str[i] <= "9") {
    digit += str[i];
  }
}
console.log("Digits=", digit);
