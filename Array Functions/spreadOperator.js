let num = [1,2,3,4,5,6,7];
let names = ["Shadab","Sarfaraj","Harry","Goggins"];

// Creating copy of num array
let num1=[...num];
console.log('Original',num);
console.log('Copy',num1);

// The changes made in original array don't reflect in copies array and vice versa
let names1 = [...names];
console.log('Original', names1)
console.log('Copy',names1);
names.push('Khabib');
console.log('Original',names); 
console.log('Copy',names1);
names1.pop();
console.log('Original',names); 
console.log('Copy',names1);