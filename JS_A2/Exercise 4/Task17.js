const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
const len = courses.length;

// Task 17.1
const str = courses.reduce(function (acc, currVal, index) {
  if (index == len - 1) {
    acc += currVal;
    return acc;
  } else {
    acc += currVal + "#";
    return acc;
  }
}, "");
console.log(str);

// Task 17.2
let countNoOfA = courses.reduce(function (acc, curr) {
  const len = curr.length;
  for (let i = 0; i < len; i++) {
    if (curr[i] == "a") {
      acc++;
    }
  }
  return acc;
}, 0);
console.log("Number of a =", countNoOfA);

// Task 17.3
let longestLength = courses.reduce(function (acc, curr) {
  if (acc.length < curr.length) return curr;
  else return acc;
});
console.log(longestLength);

// Task 17.4
const ch = "R";
let index1 = courses.reduce(function (acc, curr) {
  if (ch == curr[0]) acc++;
  return acc;
}, 0);
console.log(index1);
