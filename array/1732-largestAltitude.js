let gain = [-5, 1, 5, 0, -7];
sum = 0;
max = 0;
for (let i = 0; i < gain.length; i++) {
  const element = gain[i];
  sum = sum + element;
  if (sum > max) {
    max = sum;
  }
}
console.log(max);
