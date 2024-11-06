/* Using a for loop, display the numbers from 1 to 11 along with their cube. For e.g. if the number is 4, the output should look like
number=4, cube=64
 */
for (let i = 1; i <= 11; i++) {
  let cube = i * i * i;
  let str = "number=" + i + "," + " " + 'cube='+cube;
  console.log(str);
}
