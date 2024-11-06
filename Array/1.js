let nums = [];
let count = 0;
let len = nums.length;
for (let i = 0; i < len; i++) {
  if (nums[i] % 2 == 0) {
    count++;
  }
}
console.log("count of even numbers are = ", count);
