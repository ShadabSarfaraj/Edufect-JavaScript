const names = ["Shadab","Sarfaraj","Nayab","Brothers"];
const arr = names.map(function(str){
    return str.length;
});
console.log('Original Array:',names);
console.log('New Array', arr);

// Convert all the string to upper case
const upperCase = names.map(function(str){
    return str.toUpperCase();
});
console.log('New Array', upperCase);

// Convert all the strings to lower case
const lowerCase = names.map(function(str){
    return str.toLowerCase();
});
console.log('New Array', lowerCase);