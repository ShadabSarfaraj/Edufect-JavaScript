let arr = [10,20,50,77];
let num = 99;
let len = arr.length;
let position;
for (let i = 0; i < len; i++) {
  // finding right position of the element to be inserted.
  if (num > arr[i] && arr[i + 1] > num) {
    position = i + 1;
  }
  // If the element to be inserted at last index
  if(num>arr[i] && arr[i+1]==undefined){
    position = len;
  }
}
console.log("Position", position);
arr.splice(position, 0, num);
console.log(arr);