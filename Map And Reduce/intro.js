// Given an array, create a new array than contains elements from original array incremented by 1;

const array = [0, 1, 2];
const incArray = array.map(function (element) {
  return element + 1;
});
console.log("Original Array: ", array);
// console.log("New Array: ", incArray); 

// Given an array, create a function that takes an array as parameter and returns new array that contains double of the elements of the given array elements.
function doubleElements(arr) {
  const doubleEleArray = arr.map(function (element) {
    return element * 2;
  });
  return doubleEleArray;
}
console.log("New Array: ", doubleElements(array));
