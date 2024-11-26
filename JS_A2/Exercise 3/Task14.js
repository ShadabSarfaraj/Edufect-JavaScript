let stData = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 58, science: 54 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 60 },
];

let copyDesc = [...stData];
let copyTotalMarks = [...stData];
// Task 14.1
// stData.sort(sortNameAsc);
// function sortNameAsc(str1, str2) {
//   return str1.name.localeCompare(str2.name);
// }
// console.log(stData);

// Task 14.2
// copyDesc.sort(sortNameDesc);
// function sortNameDesc(str1, str2) {
//   return -1 * str1.name.localeCompare(str2.name);
// }
// console.log(copyDesc);

//Task 14.3
function sortAccToTotalMarks(stJSON1, stJSON2) {
  let totalMarks1 = stJSON1.maths + stJSON1.english + stJSON1.science;
//   stJSON1.totalMarks = totalMarks1;
  let totalMarks2 = stJSON2.maths + stJSON2.english + stJSON2.science;
//   stJSON2.totalMarks = totalMarks2;
  if (totalMarks1>totalMarks2) return 1;
  else if (totalMarks1 < totalMarks2) return -1;
  else return 0;
}
copyTotalMarks.sort(sortAccToTotalMarks);
console.log(copyTotalMarks);
