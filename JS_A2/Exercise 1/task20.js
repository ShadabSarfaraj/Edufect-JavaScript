const arr = [20,14,2,7,18];
const len = arr.length;
let output = "";
for (let i = 0; i < len; i++) {
  output += arr.shift() + " ";
}
console.log(output);
