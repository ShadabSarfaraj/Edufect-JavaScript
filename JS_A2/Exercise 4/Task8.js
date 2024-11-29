const names = ["Mark", "James", "Martha"];
const newNames = names.map(function (str) {
  return "<li>" + str +"</li>";
});
console.log(newNames);
let out = "<ul>";
out += newNames.join("");
out += "</ul>";
console.log(out);
