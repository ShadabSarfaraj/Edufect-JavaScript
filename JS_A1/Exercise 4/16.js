let n = 2;
let output = "";
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    output += "+" + i;
  } else {
    output += "-" + i;
  }
}
console.log(output);
