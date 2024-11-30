let stData = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

// Task 21.1
function sortArrAscAccToTotalMarks(json1, json2) {
  const totalmarks1 = calTotalMarks(json1.marks);
  const totalmarks2 = calTotalMarks(json2.marks);
  return totalmarks1 - totalmarks2;
}
function calTotalMarks(arr) {
  let marks = arr.reduce((acc, curr) => acc + curr, 0);
  return marks;
}
stData.sort(sortArrAscAccToTotalMarks);
// console.log(stData);

// Task 21.2
function calMaxMarks(arr) {
  const max = arr.reduce(function (acc, currval) {
    if (acc < currval) return currval;
    else return acc;
  });
  return max;
}
const filetereArray = stData.filter(function (singleJson) {
  const max = calMaxMarks(singleJson.marks);
  return max > 70;
});
console.log(filetereArray);

// Task 21.3
const topStudent = stData.reduce(function (acc, curr) {
  const totalmarks1 = calTotalMarks(acc.marks);
  const totalmarks2 = calTotalMarks(curr.marks);
  if (totalmarks1 > totalmarks2) return acc;
  else return curr;
});
// console.log(topStudent.name);

// Task 21.4
const array = stData.map(function (singleJson) {
  let json = {};
  json.name = singleJson.name;
  json.totalmarks = calTotalMarks(singleJson.marks);
  return json;
});
// console.log(array);

// Task 21.5
const array1 = stData.map(function (singleJson) {
  let json = {};
  json.name = singleJson.name;
  json.maxmarks = calMaxMarks(singleJson.marks);
  return json;
});
console.log(array1);
