const courses = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
let ch = "a";
function findIndexAndFilter(arr, ch) {
  let str = arr.find(function (st) {
    let len = st.length;
    for (let i = 0; i < len; i++) {
      if (st[i] == ch) {
        return ch;
      }
    }
  });
  console.log(str);

  let index = arr.findIndex(function (st) {
    let len = st.length;
    for (let i = 0; i < len; i++) {
      if (st[i] == ch) {
        return ch;
      }
    }
  });
  console.log(index);

  let filterArr = arr.filter(function (st) {
    let len = st.length;
    for (let i = 0; i < len; i++) {
      if (st[i] == ch) {
        return ch;
      }
    }
  });
  console.log(filterArr);
}
findIndexAndFilter(courses, ch);
