/* print all the words in the sentence.
 e.g. I am learning javascript.
 output -  I
           am 
           learning
           javascript
*/
let str = "Muskan is falling in love with Rohan";
let sp = " ";
let startPos = 0;
for (;;) {
  let endPos = str.indexOf(" ", startPos);
  if (endPos >= 0) {
    let out = str.substring(startPos, endPos);
    startPos = endPos + 1;
    console.log(out);
  } else {
    let out = str.substring(startPos);
    console.log(out);
    break;
  }
}
