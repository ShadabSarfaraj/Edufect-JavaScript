const names = ["Apple", "shadab", "Sarfaraj", "papaya", "Banana"];

let startChar = "S";
function findNameAndItsIndex(arr, startCh) {
  // a. length of name is greater than 5
  let name1 = arr.find(function (name) {
    return name.length > 5;
  });
  console.log(name1);

  let index = arr.findIndex(function (name) {
    return name.length > 5;
  });
  console.log(index);

  // b. starts with p
  let name2 = arr.find(function (str) {
    if (str[0] == "p" || str[0] == "P") return str;
  });

  console.log(name2);

  let index2 = arr.findIndex(function (str) {
    if (str[0] == "p" || str[0] == "P") return str;
  });
  console.log(index2);
  // c. starts with the character provided as a parameter.

  let name3 = arr.find(function (str) {
    if (str[0] == startCh || str[0] == startChar.toLowerCase()
) return str;
  });
  console.log(name3);

  let index3 = arr.findIndex(function (str) {
    if (str[0] == startCh || str[0] == startChar.toLowerCase()) return str;
  });
  console.log(index3);
}

findNameAndItsIndex(names, startChar);
