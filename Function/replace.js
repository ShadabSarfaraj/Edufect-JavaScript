function replaceChars(str, char1, char2) {
  let result = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == char1) {
      result+=char2;
    }else{
        result += str[i];
    }
  }
  return result;
}
let str = "aaa";
let char1 = "a";
let char2 = "u";
console.log(replaceChars(str, char1, char2));
