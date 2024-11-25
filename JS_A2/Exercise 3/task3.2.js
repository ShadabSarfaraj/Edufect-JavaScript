const names = ["Apple", "shadab", "Sarfaraj", "papaya", "Banana", "Push"];

let startChar = "S";

function filterArray(arr, startCh) {
  // a. Length of name is greater than 5
  let filterArr1 = arr.filter(function (str) {
    return str.length > 5;
  });
  console.log(filterArr1);

  // b. Starts with p
  let filterArr2 = arr.filter(function (str) {
    if (str[0] == "P" || str[0] == "p") {
      return str;
    }
  });
  console.log(filterArr2);

  // c. starts with the character provided as a parameter.
  let filterArr3 = arr.filter(function (str) {
    if (str[0] == startCh || str[0] == startCh.toLowerCase()) return str;
  });
  console.log(filterArr3);
}
filterArray(names, startChar);
