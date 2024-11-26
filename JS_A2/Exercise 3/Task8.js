let stData = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

const avg = 60;

//Task 8.1

function filterMarksLessThan(arr) {
  let array = arr.filter(function (singleJSON) {
    const len = singleJSON.marks.length;
    let totalMarks = 0;
    for (let i = 0; i < len; i++) {
      totalMarks += singleJSON.marks[i];
    }
    if (totalMarks < 250) return singleJSON;
  });
  console.log(array);
}
// filterMarksLessThan(stData);

// Task 8.2
function alteastOneMarksMoreThan70(arr) {
  let array = arr.filter(function (singleJSON) {
    const len = singleJSON.marks.length;
    for (let i = 0; i < len; i++) {
      if (singleJSON.marks[i] > 70) {
        return singleJSON;
      }
    }
  });
  console.log(array);
}
// alteastOneMarksMoreThan70(stData);

// Task 8.3
function twoOrMoreMarksGreaterThan70(arr) {
  let filterArray = arr.filter(function (singleJSON) {
    let len = singleJSON.marks.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (singleJSON.marks[i] > 70) {
        count++;
      }
    }
    return count >= 2;
  });
  console.log(filterArray);
}
// twoOrMoreMarksGreaterThan70(stData);

// Task 8.4
function greaterThanAvg(arr, avg) {
  let greaterThanAvgArray = arr.filter(function (singleJSON) {
    let totalMarks = 0;
    const len = singleJSON.marks.length;
    for (let i = 0; i < len; i++) {
      totalMarks += singleJSON.marks[i];
    }
    let avgMarks = totalMarks / len;

    return avgMarks > avg;
  });
  console.log(greaterThanAvgArray);
}
greaterThanAvg(stData, avg);
