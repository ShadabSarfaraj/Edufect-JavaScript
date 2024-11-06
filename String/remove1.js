// Given a string, create a new string where multiple # has been removed.
// e.g. a##b#c##
//concept:- If currect char is # and previous char is also # then don't add
// Otherwise add it.
let str = "Hello";
let output = "";
let len = str.length;
for (let i = 0; i < len; i++) {
  if (str[i] == "#") {
    if (str[i - 1] == "#") {
      //do nothing
    } else {
      output += str[i];
    }
  } else {
    output += str[i];
  }
}
console.log(output);
