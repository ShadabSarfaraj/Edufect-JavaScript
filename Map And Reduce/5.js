const prods = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Perk", qty: 20, price: 5 },
];

// Create a array of json which contians fields - name and value
// value = qty*price

const array = prods.map(function(ele){
    const value = ele.qty * ele.price;
    const json1 = {name:ele.name,value:value};
    return json1;
});
function sortAccToValueInDescOrder(prod1,prod2){
    return prod2.value-prod1.value;
}
array.sort(sortAccToValueInDescOrder);
console.log(array);