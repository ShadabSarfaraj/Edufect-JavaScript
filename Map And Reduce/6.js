const names = ["Shadab Sarfaraj", "Jack", "Bob Smith", "Ana Cook", "Tim"];
const array = names.map(function (str) {
  const indexOfSpace = str.indexOf(" ");
  let fName;
  let lName;
  let json1; // let json1 = {}; //empty json
  if (indexOfSpace != -1) {
    // if(index>=0)
    fName = str.substring(0, indexOfSpace);
    lName = str.substring(indexOfSpace + 1, str.len); // str.substring(indexOfSubstring);
    json1 = { firstName: fName, lastName: lName };
  } else {
    json1 = { firstName: str, lastName: "" };
  }
  return json1;
});
console.log(array);
