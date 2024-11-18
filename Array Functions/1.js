const numbers = [2, 5, 10, 12, 18, 21];
const x = 11;
const firstNum = numbers.find(function (num) {
  return isBig(num, x);
});
console.log("Find",firstNum);
function isBig(num, x) {
  return num > x;
}
const index = numbers.findIndex(function (num) {
  return isBig(num, x);
});
console.log("Index",index);
const greaterThanXArr = numbers.filter(function(num){
    return isBig(num,x);
});
console.log("Filter",greaterThanXArr);