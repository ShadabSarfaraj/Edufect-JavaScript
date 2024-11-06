let strings = ["Hello", "Hi", "Bye", "GOod"];
let len = strings.length;
console.log("Before", strings);
for (let i = 0; i < len; i++) {
  strings[i] = strings[i].toUpperCase();
}
console.log("After", strings);
