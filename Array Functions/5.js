const names = ["Jack", "Tim", "Anna", "Steve", "Ed"];
const name1 = [...names];
names.sort(compareLengthAsc);
function compareLengthAsc(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 > len2) return 1;
  else if (len1 < len2) return -1;
  else return 0;
}
console.log(name1);
console.log(names);
