const nums = [3, 10, -5, 0, -22, 6];
const nums1 = nums.map(function (num) {
  return Math.abs(num);
});
// OR
const nums2 = nums.map(function (num) {
  if (num >= 0) return num;
  else return -1 * num;
});
console.log("Original Array:", nums);
console.log("nums1:", nums1);
console.log("nums2", nums2);
