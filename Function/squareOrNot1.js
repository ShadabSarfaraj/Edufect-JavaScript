function isSquare(num) {
  for (let i = 1; i <= num; i++) {
    let sq = i * i;
    if (sq == num) {
      return true;
    }
  }
  return false;
}
console.log(isSquare(4));
