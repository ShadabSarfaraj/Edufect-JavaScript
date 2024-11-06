let count = 1;
let str = "";
let n = 4;
for (let i = 0; i < n; i++) {
  str += "XY" + (count + i) + (count + i + 1);
  count++;
}
console.log(str);
