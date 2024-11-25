let empData = [
  { name: "Shadab", age: 25 },
  { name: "Sarfaraj", age: 34 },
  { name: "Tree", age: 18 },
  { name: "Leaves", age: 40 },
  { name: "Water", age: 30 },
];

const startsWith = "T";
function findEmpAndItsIndex(emps) {
  // a. age less than 35
  let empData = emps.find(function (str) {
    return str.age < 35;
  });
  console.log(empData);

  let index = emps.findIndex(function (str) {
    return str.age < 35;
  });
  console.log(index);

  // b. name of the employee starts with S
  let empData1 = emps.find(function (str) {
    return str.name[0] == "S";
  });
  console.log(empData1);

  let index1 = emps.findIndex(function (str) {
    return str.name[0] == "S";
  });
  console.log(index1);

  // c. name of the employee starts with the character provided as parameter.
  let empData2 = emps.find(function (str) {
    return str.name[0] == startsWith;
  });
  console.log(empData2);
  let index2 = emps.findIndex(function (str) {
    return str.name[0] == startsWith;
  });
  console.log(index2);
}
findEmpAndItsIndex(empData);
