let arr1 = [5, 18, 26, 30];
let arr2 = [101, 102];
let m = arr1.length;
let n = arr2.length;
let len = m + n;
let out = [];
for (let i = 0; i < len; i++) {
  if (arr1.length == 0) {
    let ele = arr2.shift();
    out.push(ele);
  } else if (arr2.length == 0) {
    let ele = arr1.shift();
    out.push(ele);
  } else {
    if (i % 2 == 0) {
      let ele = arr1.shift();
      out.push(ele);
    } else {
      let ele = arr2.shift();
      out.push(ele);
    }
  }
}
console.log(out);
