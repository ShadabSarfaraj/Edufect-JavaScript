// Given a string count the number of z in it.
let str = "Hello";
let len = str.length;
let count = 0;
for (let i = 0; i < len; i++) {
  if (str[i] == "z" || str[i] == "Z") {
    count++;
  }
}
console.log(count);
