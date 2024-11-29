const personData = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "Amsterdam" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];

let countryArray = personData.map(function (ele) {
  return ele.city;
});
console.log(countryArray);
