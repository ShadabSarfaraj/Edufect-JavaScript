let personData = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Nick", country: "France", age: 32 },
  { name: "Francis", country: "France", age: 44 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];

const minAge = 30;
const country="France";
// Task 7.1
function countryIndia(arr) {
  let firstJSON = arr.find(function (oneJSON) {
    return oneJSON.country == "India";
  });
  let firstIndex = arr.findIndex(function (oneJSON) {
    return oneJSON.country == "India";
  });
  let filterCountryWithIndia = arr.filter(function (oneJSON) {
    return oneJSON.country == "India";
  });
  console.log(firstJSON);
  console.log(firstIndex);
  console.log(filterCountryWithIndia);
}
// countryIndia(personData);

// Task 7.2
function countryAndAge(arr) {
  let firstJOSN1 = arr.find(function (oneJSON) {
    return oneJSON.country == "India" && oneJSON.age < 35;
  });
  let firstIndex1 = arr.findIndex(function (oneJSON) {
    return oneJSON.country == "India" && oneJSON.age < 35;
  });
  let filterCountryAndAge = arr.filter(function (oneJSON) {
    return oneJSON.country == "India" && oneJSON.age < 35;
  });
  console.log(firstJOSN1);
  console.log(firstIndex1);
  console.log(filterCountryAndAge);
}
// countryAndAge(personData);

// Task 7.3

function nameCondition(arr) {
  let firstJSON2 = arr.find(function (oneJSON) {
    return oneJSON.name.length < 6;
  });
  let firstIndex2 = arr.findIndex(function (singleJSON) {
    return singleJSON.name.length < 6;
  });
  let filterAccordingToName = arr.filter(function (singleJSON) {
    return singleJSON.name.length < 6;
  });
  console.log(firstJSON2);
  console.log(firstIndex2);
  console.log(filterAccordingToName);
}
// nameCondition(personData);

// Task 7.4
function eitherIndiaOrUsa(arr) {
  let firstJSON3 = arr.find(function (singleJSON) {
    return singleJSON.country == "India" || singleJSON.country == "USA";
  });
  let firstIndex3 = arr.findIndex(function (singleJSON) {
    return singleJSON.country == "India" || singleJSON.country == "USA";
  });
  let filterAccToCountry = arr.filter(function (singleJSON) {
    return singleJSON.country == "India" || singleJSON.country == "USA";
  });
  console.log(firstJSON3);
  console.log(firstIndex3);
  console.log(filterAccToCountry);
}
// eitherIndiaOrUsa(personData);

// Task 7.5
function greaterThanMinAge(arr, minAge) {
  let firstJSON4 = arr.find(function (singleJSON) {
    return singleJSON.age > minAge;
  });
  let firstIndex4 = arr.findIndex(function (singleJSON) {
    return singleJSON.age > minAge;
  });
  let filterAccToAge = arr.filter(function (singleJSON) {
    return singleJSON.age > minAge;
  });
  console.log(firstJSON4);
  console.log(firstIndex4);
  console.log(filterAccToAge);
}
// greaterThanMinAge(personData,minAge);

function countryNameAsParameter(arr, str) {
  let firstJSON5 = arr.find(function (oneJSON) {
    return oneJSON.country == str;
  });
  let firstIndex5 = arr.findIndex(function (oneJSON) {
    return oneJSON.country == str;
  });
  let filterAccToParameter = arr.filter(function (oneJSON) {
    return oneJSON.country == str;
  });
  console.log(firstJSON5);
  console.log(firstIndex5);
  console.log(filterAccToParameter);
}
countryNameAsParameter(personData,country);
