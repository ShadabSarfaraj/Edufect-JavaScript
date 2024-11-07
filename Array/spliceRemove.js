let arr = [2, 68, 97, 105, 1000, 99];
console.log(arr);
// splice - insert or remove element anywhere in the array.
// Using splice for removing elements.
arr.splice(0, 2);
console.log(arr);

// We can also store the value of splice after the excecution of splice.
let str = arr.splice(1, 3);
console.log(str);
