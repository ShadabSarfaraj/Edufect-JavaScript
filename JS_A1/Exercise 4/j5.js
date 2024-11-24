let num = 22;
for (let i = 2; i <= 5; i++) {
  let output;
  if (num % i == 0) {
    output = i + ": Yes";
  } else {
    output = i + ": No";
  }
  console.log(output);
}
