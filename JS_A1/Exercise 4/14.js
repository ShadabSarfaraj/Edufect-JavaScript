let n = 8;
let str = "PQR";
let output = "";
let count = 1;
for (let i = 0; i < n; i++) {
  output += str[i % 3] + (i + 1);
}
console.log(output);
