let n = 1;
let str = "";
for (let i = 1; i <= n; i++) {
  if (i % 2 == 1) {
    str += i;
    str += '#';
  }
}
console.log(str);
