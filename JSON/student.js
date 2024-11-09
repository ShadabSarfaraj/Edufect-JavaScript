let student1 = {
  name: "shadab",
  age: 26,
  course: ["Javascript", "React", "MongoDB"],
};
// console.log(student1);
let student2 = {
  name: "Sarfaraj",
  age: 35,
  course: ["JavaScript", "C++"],
};
// console.log(student2);
let student3 = {
  name: "Muskan",
  age: 45,
  course: ["Javascript"],
};
// console.log(student3);
// Array of JSON objects...
let stArray = [student1, student2, student3];
// console.log(stArray);

let faculty = {
    name:'Jack',
    courseTaught: 'JavaScript',
    allotedStudent : ['student1', 'student2']
};

let studentDetail = {
    stDet : stArray,
    facultyDetail: faculty,
    courseFee: 25000
};
console.log(studentDetail);