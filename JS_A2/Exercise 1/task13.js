function countDivisible(arr) {
  let count = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (
      arr[i] % 2 == 0 ||
      arr[i] % 3 == 0 ||
      arr[i] % 5 == 0 ||
      arr[i] % 7 == 0
    ) {
      count++;
    }
  }
  return count;
}
const arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log("count =",countDivisible(arr));
