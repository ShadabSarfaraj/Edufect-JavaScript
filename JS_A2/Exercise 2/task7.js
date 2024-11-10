// Task 7.1
let st1 = {
  name: "Mark",
  math: 80,
  english: 75,
  science: 73,
};
let st2 = {
  name: "Bob",
  math: 90,
  english: 91,
  science: 88,
};
let st3 = {
  name: "Julia",
  math: 88,
  english: 87,
  science: 89,
};
let st4 = {
  name: "Anthony",
  math: 60,
  english: 64,
  science: 61,
};
let performance = [st1, st2, st3, st4];
// console.log(performance);

//Task 7.2
const computerMarks = [
  { name: "Mark", Computers: 90 },
  { name: "Anthony", Computers: 70 },
  { name: "Julia", Computers: 88 },
  { name: "Bob", Computers: 81 },
];
for (let i = 0; i < performance.length; i++) {
  let stJSON = performance[i];
  updateJSON(stJSON, computerMarks);
}
function updateJSON(stJSON, compMarks) {
  for (let i = 0; i < compMarks.length; i++) {
    let ch = compMarks[i].name;
    if (ch == stJSON.name) {
      stJSON.Computers = compMarks[i].Computers;
    }
  }
}
// console.log(performance);

//Task 7.3
function addTotalMarks(perf) {
  let totalMarks = 0;
  for (let i = 0; i < perf.length; i++) {
    let perfJSON = perf[i];
    totalMarks = calTotalMarks(perfJSON);
    perfJSON.totalMarks = totalMarks;
  }
}
function calTotalMarks(perfJSON) {
  let total =
    perfJSON.math + perfJSON.english + perfJSON.science + perfJSON.Computers;
  return total;
}
addTotalMarks(performance);
// console.log(performance);

//Task 7.4

let studentSummary = [];
function calSummary(perf) {
  for (let i = 0; i < perf.length; i++) {
    let stJSON = {};
    let arrJSON = perf[i];
    let maxMarks;
    let avgMarks =
      (arrJSON.math + arrJSON.english + arrJSON.science + arrJSON.Computers) /
      4;
    if (
      arrJSON.math >= arrJSON.english &&
      arrJSON.math >= arrJSON.science &&
      arrJSON.math >= arrJSON.computer
    ) {
      maxMarks = arrJSON.maths;
    } else if (
      arrJSON.science >= arrJSON.math &&
      arrJSON.science >= arrJSON.english &&
      arrJSON.science >= arrJSON.Computers
    ) {
      maxMarks = arrJSON.science;
    } else if (
      arrJSON.english >= arrJSON.math &&
      arrJSON.english >= arrJSON.science &&
      arrJSON.english >= arrJSON.Computers
    ) {
      maxMarks = arrJSON.english;
    } else {
      maxMarks = arrJSON.Computers;
    }

    // updating studentSummary

    stJSON.name = arrJSON.name;
    stJSON.avgMarks = avgMarks;
    stJSON.maxMarks = maxMarks;
    // console.log(stJSON);
    studentSummary.push(stJSON);
  }
}
calSummary(performance);
// console.log(studentSummary);

//Task 7.5
function findPosition(perf){
    const leavedStudentName = "Bob";
    for(let i=0;i<perf.length;i++){
        let perfJSON = perf[i];
        if(perfJSON.name == leavedStudentName ){
            return i;
        }
    }
}
const index = findPosition(performance);
performance.splice(index,1);
console.log(performance);
