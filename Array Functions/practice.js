let arr = [1, 3, 5, 8, 9, 13,10,12];
let value = arr.find(function (num) {
  return num % 2 == 0;
});
console.log('num =',value);

let index = arr.findIndex(function (num) {
  return num % 2 == 0;
});
console.log('At index =',index);
let newArr = arr.filter(function(nums){
    return nums%2!=0;
});
console.log(newArr);

