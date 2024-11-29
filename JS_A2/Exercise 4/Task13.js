const personData = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "Amsterdam" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];

let personInfo = personData.map(function (ele) {
  const fullname = ele.fname + " " + ele.lname;
  ele.fullname = fullname;
  return ele;
});
console.log(personInfo);
