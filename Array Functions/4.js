const emps = [
  { name: "Jack", city: "Delhi", dept: "Tech" },
  { name: "Ana", city: "London", dept: "Tech" },
  { name: "Sam", city: "London", dept: "HR" },
  { name: "Tim", city: "Delhi", dept: "HR" },
  { name: "Bond", city: "Delhi", dept: "Tech" },
  { name: "Mary", city: "Delhi", dept: "Tech" },
];

let city = "Delhi";
let dept = "Tech";

function findName(empArr, city, dept) {
  let name1 = empArr.find(function (emp) {
    return emp.city == city && emp.dept == dept;
  });
  return name1;
}
console.log("Find", findName(emps, city, dept));

let index = emps.findIndex(function (emp) {
  return emp.city == city && emp.dept == dept;
});

console.log('Index',index);

let sortlistedEmps = emps.filter(function(emp){
    return emp.city == city && emp.dept==dept;
});
console.log(sortlistedEmps);
