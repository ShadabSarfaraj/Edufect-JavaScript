let arr = [2, 5, 7, 10];
for (let i = 0; i < arr.length; i++) {
  let newValue = arr[i] + 10;
  arr.splice(i, 1, newValue);
  /* or
    arr.splice(i,1);
    arr.splice(i,0,newValue);
  */
}
console.log(arr);

