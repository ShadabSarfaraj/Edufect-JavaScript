const nums = [6, 10, 2, 7, 33, 9];
const maxNum = nums.reduce(function (acc, curr) {
    console.log(acc,curr);
  if (curr > acc) return curr;
  else return acc;
}, 0);
console.log(maxNum);