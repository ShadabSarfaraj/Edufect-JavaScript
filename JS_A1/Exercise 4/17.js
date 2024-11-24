let n = 7;
let str = "";
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    str += "+" + i;
    sum += i;
  } else {
    str += "-" + i;
    sum += -i;
  }
}
let output = str + " = " + sum;
console.log(output);
