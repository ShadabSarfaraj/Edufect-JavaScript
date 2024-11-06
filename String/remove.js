// Given a string, create a new string where multiple # has been removed.
// e.g. a##b#c##
let str = "12#####5###a#";
let len = str.length;
let newStr = "";
for (let i = 0; i < len; i++) {
  let lenNew = newStr.length;
  if (str[i] == "#" && newStr[lenNew - 1] == "#") {
    //do nothing
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
