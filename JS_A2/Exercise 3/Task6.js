let stData = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 72, science: 75 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 81 },
];

const n = 50;
const n1 = 60;
const n2 = 60;
// Task 6.1
let student1 = stData.find(function (stJSON) {
  return stJSON.maths < 50;
});

let index = stData.findIndex(function (stJSON) {
  return stJSON.maths < 50;
});
// console.log(student1);
// console.log(index);

// Task 6.2
let student2 = stData.find(function (stJSON) {
  let totalMarks = stJSON.maths + stJSON.english + stJSON.science;
  return totalMarks > 200;
});
let index2 = stData.findIndex(function (stJSON) {
  let totalMarks = stJSON.maths + stJSON.english + stJSON.science;
  return totalMarks > 200;
});
// console.log(student2);
// console.log(index2);

// Task 6.3
let student3 = stData.find(function (stJSON) {
  return stJSON.maths > stJSON.english;
});
let index3 = stData.findIndex(function (stJSON) {
  return stJSON.maths > stJSON.english;
});
// console.log(student3);
// console.log(index3);

// Task 6.4
let student4 = stData.find(function (stJSON) {
  return stJSON.maths > n && stJSON.english > n && stJSON.science > n;
});
let index4 = stData.findIndex(function (stJSON) {
  return stJSON.maths > n && stJSON.english > n && stJSON.science > n;
});
// console.log(student4);
// console.log(index4);

// Task 6.5
let newStData = stData.filter(function (stJSON) {
  return stJSON.maths < 50;
});
// console.log(newStData);

// Task 6.6
let newStData1 = stData.filter(function (stJSON) {
  let totalMarks = stJSON.maths + stJSON.english + stJSON.science;
  return totalMarks > 200;
});

let indexOfFirstStudent = stData.findIndex(function (stJSON) {
  let totalMarks = stJSON.maths + stJSON.english + stJSON.science;
  return totalMarks > 200;
});
// console.log(newStData1);
// console.log(indexOfFirstStudent);

// Task 6.7
let moreInMaths = stData.filter(function (stJSON) {
  return stJSON.maths > stJSON.english;
});
// console.log(moreInMaths);

// Task 6.8
let scoreMoreThanN = stData.filter(function (stJSON) {
  return stJSON.english > n && stJSON.maths > n && stJSON.science > n;
});
console.log(scoreMoreThanN);

let moreThanN1AndN2 = stData.filter(function (stJSON) {
  return stJSON.maths > n1 && stJSON.science > n2;
});
console.log(moreThanN1AndN2);
