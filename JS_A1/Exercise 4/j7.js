let n = 1;
for (let i = 1; i <= n; i++) {
  let str = "";
  if (i % 2 == 0) {
    str += i + ": Even";
  } else {
    str += i + ": Odd";
  }
  console.log(str);
}
