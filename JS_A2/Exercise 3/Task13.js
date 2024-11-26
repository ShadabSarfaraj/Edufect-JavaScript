let courses = ["JavaScript", "Hello", "React", "Java", "Python", "C", "Node"];
let coursesCopy = [...courses];
let coursesCopyforLength = [...courses];
let coursesCopy1 = [...courses];
// a. sort the array in ascending order as in dictonary.
courses.sort(sortStringAsc);
function sortStringAsc(str1, str2) {
  return str1.localeCompare(str2);
}
// console.log(courses);

// b. sort the array in descending order as in dictonary.
coursesCopy.sort(sortStringDesc);
function sortStringDesc(str1, str2) {
  return -1 * str1.localeCompare(str2);
}
// console.log(coursesCopy);

// c. Sort the array in ascending order of their length.
function sortStringAccToLength(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 > len2) return 1;
  else if (len1 < len2)
    return -5; // -5 bcz we have to return a negative integer
  else return 0;
}
coursesCopyforLength.sort(sortStringAccToLength);
// console.log(coursesCopyforLength);

// Sort the array in ascending order of the number of 'a' in them
function sortAccordingToNumberOfA(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < len1; i++) {
    if (str1[i] == "a") {
      count1++;
    }
  }
  for (let j = 0; j < len2; j++) {
    if (str2[j] == "a") {
      count2++;
    }
  }
  if (count1 > count2) return 1;
  else if (count1 < count2) return -1;
  else return 0;
}
coursesCopy1.sort(sortAccordingToNumberOfA);
console.log(coursesCopy1);
