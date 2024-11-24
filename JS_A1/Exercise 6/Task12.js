function countChars(str, ch) {
  let len = str.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}
let str = "abracadabra";
let char = "a";
console.log(countChars(str, char));
