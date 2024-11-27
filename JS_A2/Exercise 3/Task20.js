const array = ["12","abc","###"];
function filterAtleastOneUpperCase(arr) {
  let filteredArray = arr.filter(function (str) {
    let len = str.length;
    for (let i = 0; i < len; i++) {
      return str[i] >= "A" && str[i] <= "Z";
    }
  });
  return filteredArray;
}
console.log(filterAtleastOneUpperCase(array));
