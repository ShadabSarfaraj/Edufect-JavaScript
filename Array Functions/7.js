// if marks1+marks2 > mincut then add to new array
const stData = [
  { name: "Jack", marks1: 33, marks2: 25 },
  { name: "Bob", marks1: 40, marks2: 32 },
  { name: "Mary", marks1: 41, marks2: 40 },
  { name: "Tom", marks1: 24, marks2: 25 },
  { name: "Harry", marks1: 30, marks2: 35 },
  { name: "Anna", marks1: 32, marks2: 37 },
];

const minCut = 80;
function getStData(st, cut) {
    // Filter all the students whose marks are above the cut.
  let passedSt = st.filter(function (student) {
    return student.marks1 + student.marks2 > cut;
  });
  // Now sort the array of json of new students.
  passedSt.sort(compMarksDesc);
  function compMarksDesc(st1, st2) {
    let val1 = st1.marks1 + st1.marks2;
    let val2 = st2.marks1 + st2.marks2;
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  }
  return passedSt;
}
console.log(getStData(stData, minCut));
