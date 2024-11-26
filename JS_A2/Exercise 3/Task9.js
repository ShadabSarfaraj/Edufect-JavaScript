let stData = [
  { name: "Jack", tech: "Android" },
  { name: "Mary", tech: "React" },
  { name: "Bob", tech: "Angular" },
  { name: "Steve", tech: "Spring" },
  { name: "James", tech: "Android" },
  { name: "Julia", tech: "Android" },
  { name: "Michel", tech: "React" },
  { name: "Bill", tech: "Angular" },
  { name: "Sonny", tech: "Spring" },
  { name: "Martins", tech: "React" },
  { name: "Bruce", tech: "Angular" },
  { name: "Sam", tech: "Spring" },
];

function filterArrayOfJSON(arrJSON, bool, str) {
  let filteredArray = arrJSON.filter(function (singleJSON) {
    if (bool) {
      return singleJSON.name == str;
    } else {
      return singleJSON.tech == str;
    }
  });
  console.log(filteredArray);
}
filterArrayOfJSON(stData, false, "Angular");
