const str = ["steve", "Bob", "Ed", "Jack", "Ana"];
let val = "";
if(str.length>0)
    val = str[0];
let smallestStr = str.reduce(function (acc, curr) {
  //   console.log(acc, curr);
  if (curr.length < acc.length) return curr;
  else return acc;
},val);
console.log(smallestStr);
