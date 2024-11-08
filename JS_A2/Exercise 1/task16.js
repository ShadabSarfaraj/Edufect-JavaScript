function checkAB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" && str[i + 1] == "b") {
      return true;
    }
  }
  return false;
}
const str = "nicebaby";
if (checkAB(str)) {
  console.log("AB Found");
} else {
  console.log("AB NOT FOUND");
}
