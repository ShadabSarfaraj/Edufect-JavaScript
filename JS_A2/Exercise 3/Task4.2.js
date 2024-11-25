let empData = [
  { name: "Shadab", age: 25 },
  { name: "Sarfaraj", age: 34 },
  { name: "Tree", age: 18 },
  { name: "Leaves", age: 40 },
  { name: "Water", age: 50 },
];
const startsWith = "T";

function filterEmpData(arr, startCh) {
  // a. age less than 35
  let filterArr1 = arr.filter(function (str) {
    return str.age < 35;
  });
  console.log(filterArr1);

  // b. name of the employee starts with S
  let filterArr2 = arr.filter(function (str) {
    return str.name[0] == "S";
  });
  console.log(filterArr2);

  // c. name of the employee starts with the character provided as parameter.
  let filterArr3 = arr.filter(function (str) {
    return str.name[0] == startCh;
  });
  console.log(filterArr3);
}
filterEmpData(empData, startsWith);
