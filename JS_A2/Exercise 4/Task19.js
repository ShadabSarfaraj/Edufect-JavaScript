const personInfo = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "London" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];

// Task 19.1
const count = personInfo.reduce(function(acc,curr){
        if(curr.city == "London")
            acc++;
        return acc;
},0);
console.log()
