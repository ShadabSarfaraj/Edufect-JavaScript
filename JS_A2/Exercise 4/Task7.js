const personJson = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];
const array = personJson.map(function (object) {
  const ele = object.name + " is " + object.age + " years old.";
  return ele;
});
console.log(array);
