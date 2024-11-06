function countNoOfBOrb(str) {
  let count = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == "b" || str[i] == "B") {
      count++;
      return count;
    }
  }
  return count;
}
function hasStrings(strings) {
  let noOfb = 0;
  let len = strings.length;
  for (let i = 0; i < len; i++) {
    let str = strings[i];
    noOfb += countNoOfBOrb(str);
  }
  return noOfb;
}
let strings = [];
console.log("No of strings with b or B is", hasStrings(strings));
