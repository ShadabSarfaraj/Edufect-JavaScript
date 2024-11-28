const strArr = ["Hi", "XYZ", "bye", "A"];
const enclosedArr = strArr.map(function (str) {
  return "<p>" + str + "</p>";
});
console.log(enclosedArr);
