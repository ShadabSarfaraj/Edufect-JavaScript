const arr = [20,14,2,7,18];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.unshift(arr[i]);
  }
}
console.log(newArr);
