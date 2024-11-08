const arr = [2,4,8,16,32];
const len = arr.length;
const newArr = [];
for (let i = 0; i < len; i++) {
  if (arr[i] % 3 != 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
