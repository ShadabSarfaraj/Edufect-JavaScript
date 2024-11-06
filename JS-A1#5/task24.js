let str = "I GOT A BIRTHDAY CAR";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  if (str[i] == "A") {
    newStr += "X";
  } else if (str[i] == "B") {
    newStr += "Y";
  } else if (str[i] == "C" || str[i] == "D") {
    // do nothing
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
