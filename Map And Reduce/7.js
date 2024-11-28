const nums = [2];
const sumOfCubes = nums.reduce(function (acc, currval) {
  const cube = currval * currval * currval;
  return (acc += cube);
}, 0);
console.log(sumOfCubes);
