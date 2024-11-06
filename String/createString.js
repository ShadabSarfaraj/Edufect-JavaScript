// Given a string, create 3 strings with the alphabets, digits and other character. e.g. Ab#6!8m =>  Abm #! 68
let str = "2*a+3-c+d";
let len = str.length;
let alphabets = "";
let digits = "";
let others = "";
for (let i = 0; i < len; i++) {
  if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
    alphabets += str[i];
  } else if (str[i] >= "0" && str[i] <= "9") {
    digits += str[i];
  } else {
    others += str[i];
  }
}
console.log(alphabets, others, digits);
