let str = "DADA";
let len = str.length;
let index = Math.floor(len / 2);
let str1 = str.substring(0, index);
let str2 = str.substring(index);
let check = str1 == str2;
if (check) {
  console.log("Yes");
} else {
  console.log("No");
}