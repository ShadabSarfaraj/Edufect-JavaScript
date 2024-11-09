let cousin = {
  firstName: "Ayeza",
  lastName: "Seraj",
  age: 8,
  siblings: ["Samar", "Liyana"],
  hobbies: "Watching TV",
  isEligibleToVote: false,
};
console.log(cousin);
// Accessing values
console.log(cousin["firstName"]);
console.log(cousin.lastName);
// Updating value
cousin.hobbies = "Drawing";
cousin["age"] = 26;
console.log(cousin.hobbies);
console.log(cousin["age"]);
console.log(cousin);
cousin.siblings.push('S');
console.log(cousin.siblings)
let chaps = cousin.siblings;
console.log(chaps);
chaps.push('XYZ');
console.log(chaps);
console.log(cousin.siblings)