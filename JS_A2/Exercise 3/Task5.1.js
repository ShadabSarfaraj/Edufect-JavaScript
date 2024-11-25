const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];

function findCourseEndWithTAndItsIndex(arr) {
  let findOut = arr.find(function (str) {
    let len = str.length;
    return str[len - 1] == "t";
  });
  console.log(findOut);

  let index = arr.findIndex(function (str) {
    let len = str.length;
    return str[len - 1] == "t";
  });
  console.log(index);

  let filterArray = arr.filter(function (str) {
    let len = str.length;
    return str[len - 1] == "t";
  });
  console.log(filterArray);
}
findCourseEndWithTAndItsIndex(courses);
