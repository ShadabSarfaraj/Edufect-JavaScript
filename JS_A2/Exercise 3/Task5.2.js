const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

const ch = "b";

function findCourseEndWithTAndItsIndex(arr) {
  let findOut = arr.find(function (str) {
    let len = str.length;
    return str[len - 1] == ch;
  });
  console.log(findOut);

  let index = arr.findIndex(function (str) {
    let len = str.length;
    return str[len - 1] == ch;
  });
  console.log(index);

  let filterArray = arr.filter(function (str) {
    let len = str.length;
    return str[len - 1] == ch;
  });
  console.log(filterArray);
}
findCourseEndWithTAndItsIndex(courses);
