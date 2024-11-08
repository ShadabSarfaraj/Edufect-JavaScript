let arr = [72]; //op - 224468
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    const evenNum = arr[i]+1;
    arr.splice(i,1,evenNum);
  }
}
console.log(arr);
