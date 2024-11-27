const array = ["q","w1","c2","cat","abcd","e34","a",];
function filterAtleastOneABC(arr) {
  let filteredArray = arr.filter(function (str) {
    let len = str.length;
    for (let i = 0; i < len; i++) {
      return str[i] == "a" || str[i] == "b" || str[i] == "c";
    }
  });
  console.log(filteredArray);
}
filterAtleastOneABC(array);
