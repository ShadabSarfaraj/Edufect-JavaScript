/* Given a sentence in which each word are seprated by space, find and print all the words in the sentence.
 e.g. I am learning javascript.
 output -  I
           am 
           learning
           javascript
*/
let sentence = "I am learning Javascript";
let len = sentence.length;
console.log(len);
let out = "";
for (let i = 0; i < len; i++) {
  if (sentence[i] != " ") {
    out += sentence[i];
    if (i == len - 1) {
      console.log(out);
    }
  } else {
    console.log(out);
    out = "";
    // console.log(out);
  }
}
