let size = 8;
let str = "";
for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    str += "K";
  } else {
    str += "J";
  }
}
console.log(str);