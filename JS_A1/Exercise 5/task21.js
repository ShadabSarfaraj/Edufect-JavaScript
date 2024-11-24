let str = "Q";
let len = str.length;
let evenStr = "";
let oddStr = "";
for (let i = 0; i < len; i++) {
  if (i % 2 == 0) {
    evenStr += str[i];
  } else {
    oddStr += str[i];
  }
}
console.log("Odd:", oddStr);
console.log("Even:", evenStr);
