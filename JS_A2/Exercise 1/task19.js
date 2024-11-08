let arr = [20,14,2,7,18];
let len = arr.length;
let output = "";
for (let i = 0; i < len; i++) {
  let ch = arr.pop();
  output += ch + " ";
}
console.log("pops=", output);
