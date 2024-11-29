const numbers = [1, 2, 3, 4, 5];

// a. compute the sum of the numbers
const sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log("sum", sum);

// b. compute the product of the numbers
const product = numbers.reduce(function (acc, curr) {
  return acc * curr;
}, 1);
console.log("Product", product);

// c. max number
const maxNum = numbers.reduce(function (acc, curr) {
  if (acc > curr) return acc;
  else return curr;
});
console.log("Max Number", maxNum);

// d. min number
const minNum = numbers.reduce(function (acc, curr) {
  if (acc > curr) return curr;
  else return acc;
});
console.log("Max Number", minNum);

// e. count the number greater than 10
const count = numbers.reduce(function (acc, curr) {
  if (curr > 10) acc++;
  return acc;
}, 0);
console.log(count);
