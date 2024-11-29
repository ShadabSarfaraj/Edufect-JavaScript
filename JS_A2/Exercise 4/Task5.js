const numbers = [111];
const newArr = numbers.map(function(num){
    if(num%2 !=0)
        return "Odd";
    else
        return "Even";
});
console.log(newArr);