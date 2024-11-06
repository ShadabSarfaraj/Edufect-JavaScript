const nums = [15, 10, 5];
const len = nums.length;
let sum = 0;
for (let i = 0; i < len; i++) {
  if (nums[i] % 5 == 0) {
    sum += nums[i];
  }
}
console.log("Sum of multiple of 5 is", sum);
