const nums = [5,10,5,10];
// using arrow function
const squareNums = nums.map( (num) => num*num);
console.log(squareNums);

// Or
// using function
const squareNums1 =nums.map(function(num){
    return num*num;
});
console.log(squareNums1)