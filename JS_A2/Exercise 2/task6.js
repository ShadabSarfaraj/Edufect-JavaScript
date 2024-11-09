// Task 6.1
let product1 = {
  code: "PX101",
  stock: 15,
  price: 30,
};
let product2 = {
  code: "PX102",
  stock: 24,
  price: 20,
};
let product3 = {
  code: "PX103",
  stock: 33,
  price: 10,
};

// Task 6.2
let shop = {};
shop.products = [product1, product2, product3];
// console.log(shop);

//Task 6.3
function calTotalStock(shopJSON) {
  let prod = shopJSON.products;
  let totStock = 0;
  for (let i = 0; i < prod.length; i++) {
    totStock += prod[i].stock;
  }
  return totStock;
}
let total = calTotalStock(shop);
shop.totStockQty = total;
// console.log(shop);

// Task 6.4
let product4 = {
  code: "PX104",
  stock: 10,
  price: 40,
};

shop.products.push(product4);
total = calTotalStock(shop);
shop.totStockQty = total;
// console.log(shop);

// Task 6.5
let incPriceArr = ["PX102", "PX103"];
function getIndividualProduct(shop, incPrice) {
  let productArr = shop.products;
  for (let i = 0; i < productArr.length; i++) {
    let product = productArr[i];
    calculateNewPrice(product, incPrice);
  }
}

function calculateNewPrice(arr, match) {
  for (let i = 0; i < match.length; i++) {
    if (match[i] == arr.code) {
      arr.price = arr.price * 1.1;
    }
  }
  return 0;
}

getIndividualProduct(shop, incPriceArr);
console.log(shop);
