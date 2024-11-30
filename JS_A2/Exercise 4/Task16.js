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
const count = personData.reduce(function (acc, curr) {
  if (curr.age > 27) acc++;
  return acc;
}, 0);
console.log("Number of person whose age is greater than 27 =", count);

// c. compute the youngest peson.
const youngestPerson = personData.reduce(function (acc, curr) {
  if (acc < curr.age) return acc;
  else return curr.age;
}, personData[0].age);
console.log("Youngest Person", youngestPerson);

// d.compute the oldest person
const oldestPerson = personData.reduce(function (acc, curr) {
  if (acc < curr.age) return curr.age;
  else return acc;
}, personData[0].age);
console.log(oldestPerson);

// e. count the number of people whose name starts with 'M'
const countName = personData.reduce(function(acc,curr){
      if(curr.name[0]=="M")
           acc = acc+1;
      return acc;
},0);
console.log(countName);
