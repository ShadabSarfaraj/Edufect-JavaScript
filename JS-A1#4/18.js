let n = 7;
let output = "";
for (let i = n; i >= 1; i--) {
  if (i % 3 == 0) {
    output += "x";
  } else {
    output += i;
  }
}
console.log(output);
