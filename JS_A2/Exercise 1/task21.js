let names = ["Jack", "Bob", "Ed", "Steve"];
let find = "Bill";
let index = names.indexOf(find);
console.log("Index =", index);
if(index!=-1){
names.splice(index, 1);
}
console.log(names);
