const names = ["Jack", "Ana", "Sam", "Tim", "Julia"];
const ch = "S";

// function to check whether first element first character matches with ch or not ?
function isStarting(st, ch) {
  return st == ch;
}

function findName(nameArr, toFind) {
  const str = nameArr.find(function (st) {
    const i = 0;
    return isStarting(st[i], toFind);
  });
  return str;
}
console.log("Using Function", findName(names, ch));

function findIndex(nameArr, ch) {
  const index = nameArr.findIndex(function (st) {
    let i = 0;
    return isStarting(st[i], ch);
  });
  return index;
}

console.log("Index using function", findIndex(names, ch));

function elementThatMatched(nameArr, toFind) {
  const filterArr = nameArr.filter(function (st) {
    const i = 0;
    return isStarting(st[i], toFind);
  });
  return filterArr;
}

console.log("Filter", elementThatMatched(names, ch));
