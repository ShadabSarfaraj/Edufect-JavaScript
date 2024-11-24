let str = "ABCDABCD";
let len = str.length;
let out = "";
for (let i = 0; i < len / 2; i++) {
  out += str[i];
}
console.log(out);
