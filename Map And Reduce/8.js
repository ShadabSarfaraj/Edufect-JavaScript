const numbers = [2, 5, 99, 25, 205, 55, 151];
const maxNum = numbers.reduce(function (acc, currval) {
    console.log(acc,currval);
  if (acc < currval) acc = currval;
  return acc;
}, 0);
console.log(maxNum);
