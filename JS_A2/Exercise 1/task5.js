let arr = [100,200,10,20,50,64];
let count = 0;
let values = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 21) {
    count++;
    values += arr[i] + ",";
  }
}
console.log("Count =", count);
console.log("Values =", values);
