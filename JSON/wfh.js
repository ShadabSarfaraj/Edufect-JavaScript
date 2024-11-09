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
//console.log(company);

function calSalary(compJSON) {
  let empArr = compJSON.employees;
  let totalSalary = 0;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    totalSalary += emp.salary;
  }
  return totalSalary;
}
// console.log("Total Salary =", calSalary(company));

function increaseSalary(compJSON) {
  let empArr = compJSON.employees;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    if (emp.raise == true) {
      let newSalary = emp.salary + emp.salary * 0.1;
      emp.salary = newSalary;
      emp.raise = false;
    }
  }
}
increaseSalary(company);
//console.log(company);
const wfhEmp = ["Anna", "Bill"];
function addWfh(compJSON) {
  let empArr = compJSON.employees;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    if (checkInArray(emp.name, wfhEmp)) {
      emp.wfh = true;
    } else {
      emp.wfh = false;
    }
  }
}
function checkInArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      return true;
    }
  }
  return false;
}
addWfh(company);
console.log(company);
