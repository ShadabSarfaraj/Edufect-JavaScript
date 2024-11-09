let emp1 = {
  name: "Sam",
  dept: "Tech",
  designation: "Manager",
  salary: 40000,
  raise: true,
};
//   console.log(emp1);

let emp2 = {
  name: "Mary",
  dept: "Finance",
  designation: "Trainee",
  salary: 18500,
  raise: true,
};
//   console.log(emp2);

let emp3 = {
  name: "Bill",
  dept: "HR",
  designation: "Executive",
  salary: 21200,
  raise: false,
};
//   console.log(emp3);
let company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: [emp1, emp2, emp3],
};
// console.log(company);

let emp4 = {
  name: "Anna",
  dept: "Tech",
  designation: "Executive",
  salary: 25600,
  raise: false,
};
company.employees.push(emp4);
console.log(company);

