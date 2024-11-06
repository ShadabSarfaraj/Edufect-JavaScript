let str = "A";
let len = str.length;
let firstHalf = str.substring(0, len / 2);
let latterHalf;
let out;
if (len % 2 == 0) {
  latterHalf = str.substring(len / 2);
  out = latterHalf + firstHalf;
} else {
  latterHalf = str.substring(len / 2 + 1);
  let middleIndex = Math.floor(len / 2);
  let middle = str[middleIndex];
  out = latterHalf + middle + firstHalf;
}
console.log(out);