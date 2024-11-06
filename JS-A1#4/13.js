let n = 4;
let str = "ABC";
let output = "";
for (let i = 0; i < n; i++) {
  output += str[i % 3];
}
console.log(output);
