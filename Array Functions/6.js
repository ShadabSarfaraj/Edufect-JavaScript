// In the question value means qty*price = value
const salesData = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Nescafe", qty: 30, price: 9 },
];

salesData.sort(compValueDesc);
function compValueDesc(prod1, prod2) {
  let value1 = prod1.qty * prod1.price;
  let value2 = prod2.qty * prod2.price;
  if (value1 > value2) {
    return -1;
  } else if (value1 < value2) {
    return 1;
  } else {
    return 0;
  }
}
console.log(salesData);
