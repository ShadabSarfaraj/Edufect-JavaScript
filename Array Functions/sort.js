let arr = [99, 45, 22, 15, 100, 999, 50];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = [...arr];
arr.sort(compareNumAsc);
function compareNumAsc(num1, num2) {
  if (num1 > num2) {
    return 1; // later i.e num1 should come after num2
  } else if (num1 < num2) {
    return -1; // earlier i.e num1 should come before num2.
  } else {
    return 0; // no change in the order
  }
}

function compareNumDesc(num1, num2) {
  if (num1 > num2) return -1; //earlier
  else if (num1 < num2) return 1; //later
  else return 0; // same number so, no change in the order
}
arr2.sort(compareNumDesc);
console.log(num);
console.log(arr);
console.log(arr2);
let names = ["Shadab", "Sarfaraj", "Naurin", "Nayab", "Naziya"];
names.sort(compNamesAsc);
// function to arrange names in ascending order
function compNamesAsc(name1, name2) {
  return name1.localeCompare(name2);
}
console.log(names);

// function to arrange names in descending order.
function compNamesDesc(name1, name2) {
  return -1 * name1.localeCompare(name2);
}
names.sort(compNamesDesc);
console.log(names);
