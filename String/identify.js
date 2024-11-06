/* Write a program to check a character is digit, alphabet or other character in a string */
let str = "A#1b@2c++3";
let len = str.length;
for (let i = 0; i < len; i++) {
  let ch = str[i];
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    console.log(ch, " is alphabet.");
  } else if (ch >= '0' && ch <= '9') {
    console.log(ch, " is digit.");
  } else {
    console.log(ch, "is others.");
  }
}
