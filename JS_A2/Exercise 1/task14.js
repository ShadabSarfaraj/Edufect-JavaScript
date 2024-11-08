function sequenceOrNot(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = i;
    let previous = i - 1;
    if (arr[current] != arr[previous] + 1) {
      return "NOT";
    }
  }
  return "SEQUENCE";
}
let arr = [1,1,2,3];
console.log(sequenceOrNot(arr));
