const arr = [];
const len = arr.length;
for (let i = 0; i < len; i++) {
  if (arr[i] == "Hello") {
    arr.splice(i, 1);
  }
}
console.log(arr);
