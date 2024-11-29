const personData = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];

// a. compute the sum of ages
const sumOfAges = personData.reduce(function (acc, curr) {
  // console.log(acc,curr.age)
  return (acc += curr.age);
}, 0);
console.group(sumOfAges);

// b. count the number of person who are more than 27 years of age
