function squareOrNot(num) {
  let isSquare = "false";
  for (let i = 1; i <= num; i++) {
    let sq = i * i;
    if (sq == num) {
      isSquare = "true"; // we can just "return true" it will break the loop and also come back to the place where it is called.
      break;
    }
  }
  return isSquare;
}
console.log(squareOrNot(3));
