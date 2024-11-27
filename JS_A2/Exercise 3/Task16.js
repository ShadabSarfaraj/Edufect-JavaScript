let stData = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

let copy1 = [...stData];
let copy2 = [...stData];
let copy3 = [...stData];
let copy4 = [...stData];
let copy5 = [...stData];
const cutoff = 60;
const minTotal = 250;
const minScore = 55;
const oneRecord = stData[0].marks;
const len = oneRecord.length;
// Task 16.1

function sortAccToTotalMarks(stJSON1, stJSON2) {
  let totMarks1 = 0;
  let totMarks2 = 0;
  for (let i = 0; i < len; i++) {
    totMarks1 += stJSON1.marks[i];
    totMarks2 += stJSON2.marks[i];
  }
  return totMarks1 - totMarks2;
}
copy1.sort(sortAccToTotalMarks);
// console.log(copy1);

// Task 16.2
function sortAccordingToMaxValue(stJSON1, stJSON2) {
  let max1 = 0;
  let max2 = 0;
  let arr1 = stJSON1.marks;
  let arr2 = stJSON2.marks;
  for (let i = 0; i < len; i++) {
    if (max1 < arr1[i]) {
      max1 = arr1[i];
    }
    if (max2 < arr2[i]) {
      max2 = arr2[i];
    }
  }
  return max1 - max2;
}
copy2.sort(sortAccordingToMaxValue);
// console.log(copy2);

// Task 16.3

function sortCopy3(copy3, cutoff) {
  function countgreaterCutOffAndSort(stJSON1, stJSON2) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < len; i++) {
      if (stJSON1.marks[i] > cutoff) count1++;
      if (stJSON2.marks[i] > cutoff) count2++;
    }
    return count2 - count1;
  }
  copy3.sort(countgreaterCutOffAndSort);
  //   console.log(copy3);
}
sortCopy3(copy3, cutoff);

// Task 16.4
function sortAccToTotalMarksDesc(stJSON1, stJSON2) {
  let totMarks1 = 0;
  let totMarks2 = 0;
  for (let i = 0; i < len; i++) {
    totMarks1 += stJSON1.marks[i];
    totMarks2 += stJSON2.marks[i];
  }
  return totMarks2 - totMarks1;
}
function greaterThanMinTotalAndSortDesc(copy4, minTotal) {
  let filteredArrayOfJSON = copy4.filter(function (singleJSON) {
    let totalMarks = 0;
    for (let i = 0; i < len; i++) {
      totalMarks += singleJSON.marks[i];
    }
    return totalMarks > minTotal;
  });
  filteredArrayOfJSON.sort(sortAccToTotalMarksDesc);
  // console.log(filteredArrayOfJSON);
}
greaterThanMinTotalAndSortDesc(copy4, minTotal);

// Task 16.5

function greaterThanMinScoreAndSortAsc(copy5, minScore) {
  let filteredArray = copy5.filter(function (singleJSON) {
    let arr = singleJSON.marks;
    let bool = true;
    for (let i = 0; i < len; i++) {
      if (arr[i] < minScore) bool = false;
    }
    return bool;
  });
  function sortAscAccToName(stJSON1,stJSON2){
        return stJSON1.name.localeCompare(stJSON2.name);
  }
  filteredArray.sort(sortAscAccToName);
  return filteredArray;
}
console.log(greaterThanMinScoreAndSortAsc(copy5, minScore));
