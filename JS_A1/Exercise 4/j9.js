let n = 5;
for (let i = 1; i <= n; i++) {
  let sq = "Square of " + i + " = " + i * i;
  if (i % 2 == 0) {
    sq += ": Even";
  } else {
    sq += ": Odd";
  }
  console.log(sq);
}
