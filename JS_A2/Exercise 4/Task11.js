const stData = [
  { name: "Mary", marks: 72 },
  { name: "Anita", marks: 75 },
  { name: "Thomas", marks: 81 },
  { name: "Bruce", marks: 64 },
];

const output = stData
  .map(function (ele) {
    let modifiedEle =
      "<tr><td>" +
      ele.name +
      "</td>" +
      "<td>" +
      ele.marks +
      "</td><td><button onClick = show('" +
      ele.name +
      "')>Show More</button><tr>";
    return modifiedEle;
  })
  .join(" ");
console.log(output);
