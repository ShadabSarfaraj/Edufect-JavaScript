function print(arr) {
  let count = 0;
  if (arr[0] % 2 != 0) {
    return "NOT";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        count++;
      } else {
        count--;
      }
    }
  }

  if (count == 0 || count == 1) {
    return "ALTERNATING";
  } else {
    return "NOT";
  }
}
let arr = [12,25];
console.log(print(arr));
