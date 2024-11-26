function seprateUsingJoin(arr, sep) {
  let str = arr.join(sep);
  return str;
}
let array = ["A", "B", "C"];
const seprator = "level:";
let output = seprateUsingJoin(array, seprator);
console.log(output); //Alevel:Blevel:C - correct output. 
