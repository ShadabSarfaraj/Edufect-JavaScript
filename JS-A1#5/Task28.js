let str = "AB ABC ABCD ABCD ABC AB";
let startPos = 0;
let count = 0;
for (;;) {
  let index = str.indexOf("ABCD", startPos);
  startPos = index + 1;
  if (index >= 0) {
    count++;
  } else {
    break;
  }
}
console.log("Count of ABCD =", count);
