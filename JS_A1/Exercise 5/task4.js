// count the no of x and y
let str = "12789";
let len = str.length;
let countX = 0;
let countY = 0;
for (let i = 0; i < len; i++) {
  if (str[i] == "x") {
    countX++;
  } else if (str[i] == "y") {
    countY++;
  }
}
console.log("x=", countX);
console.log("y=", countY);
