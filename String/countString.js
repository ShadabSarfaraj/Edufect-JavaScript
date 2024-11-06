// Given two strings, find the number of times the second string appeares in the first string. YEsNoYesOkYes, Yes => 3
let str = "TAbcAAbcAd";
let find = "A";
let count = 0;
let len = str.length;
let index;
for (let i = 0; i < len; i = index + 1) {
  index = str.indexOf(find, i);
  //   console.log(index);
  if (index >= 0) {
    count++;
  } else {
    break;
  }
}
console.log(count);
