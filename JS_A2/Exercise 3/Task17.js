let array = ["bear","bell","cab","hello"];
function sortAccToNoOfABC(str1, str2) {
    // console.log(str1,str2);
  let count1 = countABC(str1);
  let count2 = countABC(str2);
  if (count1 != count2) return count1 - count2;
  else return str1.length -str2.length;
}
function countABC(str) {
  let len = str.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == "a" || str[i] == "b" || str[i] == "c") {
      count++;
    }
  }
  return count;
}
array.sort(sortAccToNoOfABC);
console.log(array); // ["is","going","aa","car"]; is Correct outut
