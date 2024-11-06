// Given two strings, find the number of times the second string appeares in the first string. YEsNoYesOkYes, Yes => 3
let str = "TAbcAAbcAd";
let find = "A";
let count = 0;
let startPositon = 0;
for (;;) {
  index = str.indexOf(find, startPositon);
  if (index >= 0) {
    count++;
    startPositon = index + 1;
  } else {
    break;
  }
}
console.log(count);
