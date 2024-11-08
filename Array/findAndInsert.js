const course = ["C++", "C", "JavaScript", "HTML"];
console.log(course);
const len = course.length;
for (let i = 0; i < len; i++) {
  let ch = course[i].toLowerCase();
  if (ch == "javascript") {
    course.splice(i + 1, 0, "Angular", "React", "Node");
  }
}
console.log(course);
