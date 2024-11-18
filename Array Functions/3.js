const names = ["Jack", "Ana", "Sam", "Tim", "Julia"];
const ch = "J";

const str = names.find(function (st) {
  const i = 0;
  return isStarting(st[i], ch);
});
function isStarting(st, ch) {
  return st == ch;
}
console.log("Find",str);

const index = names.findIndex(function (st) {
  let i = 0;
  return isStarting(st[i], ch);
});
console.log("Index", index);

const filterArr = names.filter(function (st) {
  const i = 0;
  return isStarting(st[i], ch);
});
console.log('Filter',filterArr);
