const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// find function
const evenNum = arr.find(function (num) {
  return num % 2 == 0;
});
console.log(evenNum);
const evenIndex = arr.findIndex(function (num) {
  return num % 2 == 0;
});
console.log(evenIndex);
const evenArr = arr.filter(function (num) {
  return num % 2 == 0;
});
console.log(evenArr); // [2,4,6,8,10]

const oddNum = arr.filter(function (num) {
  return checkNum(num);
});
console.log(oddNum); // [1,3,5,7,9];

function checkNum(num) {
  return num % 2 == 1;
}
