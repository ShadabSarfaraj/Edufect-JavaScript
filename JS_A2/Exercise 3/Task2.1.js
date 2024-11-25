const numbers = [20, 22, 10, 25, 45, 90, 105];
// a. equal to 10
function findNumberAndIndex(arr) {
  let num = arr.find(function (digit) {
    return digit == 10;
  });
  console.log("Number", num);

  let index = arr.findIndex(function (digit) {
    return digit == 10;
  });
  console.log("Index", index);
}
findNumberAndIndex(numbers);

// b. greater than 30
function findGreaterNumAndIndex(arr) {
  let num = arr.find(function (digit) {
    return digit > 30;
  });
  console.log("Number", num);

  let index = arr.findIndex(function (digit) {
    return digit > 30;
  });
  console.log("Index", index);
}
findGreaterNumAndIndex(numbers);

// c. multiple of 3
function findMultipleOfThree(arr) {
  let num = arr.find(function (digit) {
    return digit % 3 == 0;
  });
  console.log("Number", num);

  let index = arr.findIndex(function (digit) {
    return digit % 3 == 0;
  });
  console.log("Index", index);
}
findMultipleOfThree(numbers);
