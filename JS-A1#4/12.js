let n = 1   ;
let output = "";
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    output += "Y";
  } else {
    output += "X";
  }
  console.log(output);
}
