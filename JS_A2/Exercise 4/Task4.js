const numbers = [77];
const newArr = numbers.map(function(num){
    if(num%2 == 0)
        return num;
    else return 0;
});
console.log(newArr);