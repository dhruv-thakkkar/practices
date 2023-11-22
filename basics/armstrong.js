/* 
Armstrong number or Narcissistic number 
n = 153
power = n.length
1^3 + 5^3 + 3^3 is 1 + 125 + 27 which is equal to 153.
*/

for (let j = 1; j <= 548834; j++) {
  let sum = 0;
  let number = j;
  let power = number.toString().length;
  for (let i = 0; i < power; i++) {
    sum = sum + (number % 10) ** power;
    number = Math.trunc(number / 10);
  }
  if (sum == j) {
    console.log(j);
  }
}
