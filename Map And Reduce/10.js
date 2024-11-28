const prods = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Perk", qty: 20, price: 5 },
];

// total sales value = ?
const totalSalesValue = prods.reduce(function (acc, curr) {
  console.log(acc, curr);
  acc += curr.qty * curr.price;
  return acc;
}, 0);
console.log(totalSalesValue);
