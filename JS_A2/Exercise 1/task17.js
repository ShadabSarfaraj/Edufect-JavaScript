function evenArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;f
}
let arr = [20,14,2,7,18];
let newArr = [];
console.log(evenArr(arr));
