let numbers = [10, 25, 64, 21,98, 10, 45, 1, 5, 10, 31,24];
function filterArray(arr) {
  // a. equal to 10
  let filterArr = arr.filter(function (num) {
    return num == 10;
  });
  console.log(filterArr);
  // b. greater than 30
  let filterArr1 = arr.filter(function (num) {
    return num > 30;
  });
  console.log(filterArr1);
  // c. multiple of 3
  let filterArr2 = arr.filter(function (num) {
    return num % 3 == 0;
  });
  console.log(filterArr2);
}

// Calling funtion
filterArray(numbers);
