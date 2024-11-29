const empData = [
  { id: 101, name: "Mark" },
  { id: 105, name: "Steve" },
  { id: 78, name: "James" },
];

// first using map to add <button onClick=clicked(id)>name
// I will use </button> as a seprator for join()

let str = empData
  .map(function (emp) {
    const str =
      "<button onClick=clicked(" + emp.id + ")>" + emp.name + "</button>";
    return str;
  })
  .join(" ");
console.log(str);
