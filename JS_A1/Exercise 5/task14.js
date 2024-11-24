let str = "9#a$M%2eP&$"; //qwNN*%bT
let len = str.length;
let output = "";
for (let i = 0; i < len; i++) {
  if (str[i] >= "0" && str[i] <= "9") {
    //do nothing
  } else if (
    (str[i] >= "a" && str[i] <= "z") ||
    (str[i] >= "A" && str[i] <= "Z")
  ) {
    // do nothing
  } else {
    output += str[i];
  }
}
console.log(output);
