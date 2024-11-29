const empData = [
  { id: 101, name: "Mark" },
  { id: 105, name: "Steve" },
  { id: 78, name: "James" },
];
/* the string should be 
<p class='id101'>Mark</p> <p class='id105'>Steve</p> <p class='id78'>James</p>
*/

let output = empData.map(function(emp){
    let str = "<p class = 'id" + emp.id +"'>"+emp.name+"</p>";
    return str;
}).join(" ");
console.log(output);