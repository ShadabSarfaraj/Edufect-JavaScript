function compareNoOfChar(str, char1, char2) {
  let len = str.length;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == char1) {
      count1++;
    } else if (str[i] == char2) {
      count2++;
    }
  }
  if (count1 > count2) {
    return 1; // when count 1 is more
  } else if (count1 < count2) {
    return -1; // When count 2 is more
  } else {
    return 0; // when equal
  }
}
let str = "aaacdef";
let char1 = "c";
let char2 = "x";
console.log(compareNoOfChar(str, char1, char2));
