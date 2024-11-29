const names = ["Shadab", "Tom", "Jerry", "Harry"];
const len = names.length;

// a. concatenate all the strings with :: between them
let str = names.reduce(function (acc, curr, index) {
  // index is the position of the curr in the array
  //   console.log(curr, index);
  //   if (curr != names[len-1]) acc += curr + "::";
  if (index != len - 1) acc += curr + "::";
  else acc += curr;
  return acc;
}, "");
console.log("Concatenation =", str);

// b. compute the sum of the length of all the strings.
let sumOfLength = names.reduce(function (acc, curr) {
  return (acc += curr.length);
}, 0);
console.log("Sum of Length =", sumOfLength);

// c. concatenate the first character of all the strings.
const concatenateFirstChar = names.reduce(function(acc,curr){
    acc += curr[0];
    return acc;
},"");
console.log(concatenateFirstChar);