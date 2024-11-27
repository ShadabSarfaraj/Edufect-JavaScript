let personArray = [
  { name: "Mary", city: "London" },
  { name: "Anita", city: "Paris" },
  { name: "Edward", city: "New York" },
  { name: "Thomas", city: "Rome" },
  { name: "Robin", city: "Seattle" },
  { name: "Sophia", city: "Los Angeles" },
  { name: "Bruce", city: "Delhi" },
];

let continentArray = [
  { city: "London", continent: "Europe" },
  { city: "Delhi", continent: "Asia" },
  { city: "Seattle", continent: "North America" },
  { city: "Paris", continent: "Europe" },
  { city: "New York", continent: "North America" },
  { city: "Rome", continent: "Europe" },
  { city: "Bengaluru", continent: "Asia" },
  { city: "Los Angeles", continent: "North America" },
];

const continent = "North America";
const copy1 = [...personArray];

// * Task 21.1

function getPersonByContinent(personArray, continentArray, continent) {
  let filteredArray = personArray.filter(function (person) {
    const city = person.city;
    let continentRecord = continentArray.find(function (record) {
      return city == record.city && record.continent == continent;
    });
    return continentRecord != undefined;
  });
  // console.log(filteredArray);
}
getPersonByContinent(personArray, continentArray, continent);

// * Task21.2
function sortPersonByContinent(personArray, continentArray) {
  personArray.sort(sortPersonAsc);
  function sortPersonAsc(personA, personB) {
    let isFind1 = continentArray.find(function (record) {
      return record.city == personA.city;
    });
    let isFind2 = continentArray.find(function (record) {
      return record.city == personB.city;
    });

    if (isFind1 != undefined && isFind2 != undefined)
      return isFind1.continent.localeCompare(isFind2.continent);
  }
}
sortPersonByContinent(copy1, continentArray);
console.log(copy1);
