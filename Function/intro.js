let student1 = "Shadab";
let student2 = "Sarfaraj";
let student3 = "Bushra";
let str1 = "Good Morning " + student1;
console.log(str1);
let str2 = "Good Morning " + student2;
console.log(str2);
let str3 = "Good Morning " + student3;
console.log(str3);

//Since we are greeting student again and again and for that we are replication same code again and again so use function
let student4 = "Hasan";
let student5 = "Muskan";
function greetStudent(stName) {
  let str = "Good Morning " + stName;
  console.log(str);
}
greetStudent(student4);
greetStudent(student5);

// Suppose we have to write a function which has two parameters which are Greetparam and stName
let greet = "Good Night";
let student6 = "Happy";
let student7 = "Sad";
function greetSt(greetParam, stName) {
  let str = greetParam + " " + stName;
  console.log(str);
}
greetSt(greet, student6);
greetSt(student7);
greetSt("Good", "ST"); 
