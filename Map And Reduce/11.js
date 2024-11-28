const prods = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 120 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Perk", qty: 20, price: 5 },
];

let productWithMaxsalesValue = prods.reduce(function (acc, curr) {
  let v1 = acc.qty * acc.price;
  let v2 = curr.qty * curr.price;
  if (v1 > v2) return acc;
  else return curr;
});
console.log(productWithMaxsalesValue);
