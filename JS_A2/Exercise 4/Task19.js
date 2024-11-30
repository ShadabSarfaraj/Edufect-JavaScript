const personInfo = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "London" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];

// Task 19.1
const count = personInfo.reduce(function (acc, curr) {
  if (curr.city == "London") acc++;
  return acc;
}, 0);
console.log(count);

// Task 19.2
function countOfPeople(array, param) {
  const count = array.reduce(function (acc, curr) {
    if (curr.city == param) acc++;
    return acc;
  }, 0);
  return count;
}
console.log(countOfPeople(personInfo,"Rome"));

// Task 19.3
function findCity(array,firstName){
   const nameOfCity =  array.find(function(ele){
        return ele.fname == firstName;
    });
    return nameOfCity.city;
}
console.log(findCity(personInfo,"Tim"));
