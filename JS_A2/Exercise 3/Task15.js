let personData = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];
let copy1 = [...personData];
let copy2 = [...personData];
let copy3 = [...personData];
let copy4 = [...personData];
let copy5 = [...personData];
const country = "India";
// Task 15.1
function sortAccToNameInAsc(personJSON1, personJSON2) {
  return personJSON1.name.localeCompare(personJSON2.name);
}
copy1.sort(sortAccToNameInAsc);
// console.log(copy1);

// Task 15.2
function sortAccToAgeInDesc(personJSON1, personJSON2) {
  let age1 = personJSON1.age;
  let age2 = personJSON2.age;
  if (age1 > age2) {
    return -1;
  } else if (age1 < age2) {
    return 1;
  } else {
    return 0;
  }
}
copy2.sort(sortAccToAgeInDesc);
// console.log(copy2);

// Task 15.3
function sortCountryAndThenName(arr) {
  arr.sort(sortCompany);
  function sortCompany(personJSON1, personJSON2) {
    if (personJSON1.country != personJSON2.country)
      return personJSON1.country.localeCompare(personJSON2.country);
    // when country are same then sort according to name.
    else return personJSON1.name.localeCompare(personJSON2.name);
  }
//   console.log(arr);
}
// sortCountryAndThenName(copy3);

// Task 15.4
function sortCountryAndThenAge(personJSON1,personJSON2){
    if(personJSON1.country != personJSON2.country)
        return personJSON1.country.localeCompare(personJSON2.country);
    else{
        // if(personJSON1.age>personJSON2.age)
        //     return 1;
        // else if(personJSON1.age<personJSON2.age)
        //     return -1;
        // else
        //     return 0;

        // Or
        return personJSON1.age - personJSON2.age;
    }
}
console.log(copy4.sort(sortCountryAndThenAge));


// Task 15.5
function filterAccToCountryAndSortDescAccToAge(arr, para) {
  let filteredPerson = arr.filter(function (singleJSON) {
    return singleJSON.country == para;
  });
  filteredPerson.sort(sortFilteredPerson);
  function sortFilteredPerson(personJSON1, personJSON2) {
    let age1 = personJSON1.age;
    let age2 = personJSON2.age;
    if (age1 > age2) return -1;
    else if (age1 < age2) return 1;
    else return 0;
  }
  return filteredPerson;
}
// console.log(filterAccToCountryAndSortDescAccToAge(copy5,country));
