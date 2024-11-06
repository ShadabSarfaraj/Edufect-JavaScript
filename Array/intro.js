let fruit = ["Mango", "Banana", "Grapes"];
console.log(fruit);
let number = [1, 2, 3, 4, 5, 6];
console.log(number);
let st = ["Jack", "Dant", "JavaScript"];
console.log(st);
console.log(st[2]);
console.log(st[3]); // Undefined bcz at index 3 no element is there.
// declaring an empty array
let arr = [];
console.log(arr);
console.log(arr[1]); // undefined
// Second method to declare a array
let arr1 = new Array("Shadab", "Sarfaraj", "Single");
console.log(arr1);
console.log(arr1[2]);
// find out the no of elements in the array and using for loop print the array.
let len = number.length;
for(let i=0;i<len;i++){
    console.log(number[i]);
}