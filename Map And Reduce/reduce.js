const array = [1, 2, 3];
const sum = array.reduce(function (acc, currVal) {
  console.log(acc, currVal);
  return acc + currVal;
}, 0);
console.log(sum);

const names = ["Jack", "Tom", "Jerry", "Bob", "Harry", "Doraemon"];
// using arrow function
const singleString = names.reduce((acc, item) => acc + item, "");
console.log(singleString);

//or in reverse order
const singleString1 = names.reduce((acc, item) => item + acc, "");
console.log(singleString1);

// Sum of length of all the string present in names array
let sumOfLength = names.reduce((acc, item) => acc + item.length, "");
console.log(sumOfLength);

// output = 435358 bcz acc is initialized to empty string so finally the callback function will concatenate accumulator and item.length;
let sumOfLength1= names.reduce((acc,item)=> acc+item.length,0);
console.log(sumOfLength1);
// output = 28 bcz accumulator is initialized to a number/integer and not as a string.

let singleChar = names.reduce(function(acc,currval){
    return acc+currval[0]+":";
},"");
console.log(singleChar);