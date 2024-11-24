let str = "ABCD Java";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; ) {
  if (
    str[i] == "A" &&
    str[i + 1] == "B" &&
    str[i + 2] == "C" &&
    str[i + 3] == "D"
  ) {
    newStr += "XYZ";
    i = i + 4;
    console.log(i);
  } else if (str[i] == "A" && str[i] != "B") {
    newStr += str[i];
    i++;
  } else {
    newStr += str[i];
    i++;
  }
}
console.log(newStr);
