const arr = ["Jack", "Lily"];
for (let i = 0; i < arr.length; i++) {
  let greet = "Hello" + " " + arr[i];
  arr.splice(i, 1, greet);
}
console.log(arr);
