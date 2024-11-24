let str = "1234567890";
let len = str.length;
let out = "";
for (let i = len / 2; i < len; i++) {
  out += str[i];
}
console.log(out);
