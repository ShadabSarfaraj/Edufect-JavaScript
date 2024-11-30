const stData = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 72, science: 75 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 81 },
];

// Task 18.1
const totalMarksInMaths = stData.reduce(function (acc, curr) {
  return acc + curr.maths;
}, 0);
console.log(totalMarksInMaths);

// Task 18.2
let count = stData.reduce(function (acc, curr) {
  if (curr.science > 60) acc++;
  return acc;
}, 0);
console.log(count);

// Task18.3
const studentName = stData.reduce(function (acc, curr) {
  if (acc.english< curr.english) {
    return curr;
  }
  else 
    return acc;
});
console.log(studentName.name);

//Task 18.4
const studentArray = stData.reduce(function(acc,curr){
        if(curr.maths>60){
            acc.push(curr);
            // If only required name of students...
            // acc.push(curr.name);
        }
        return acc;
},[]);
console.log(studentArray);

// Task 18.5
const studentArr = stData.reduce(function(acc,curr){
    const totalMarks = curr.english+curr.maths+curr.science;
        if(totalMarks<200){
            acc.push(curr.name);
        }
        return acc;
},[]);
console.log(studentArr);
