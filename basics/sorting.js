/* Insertion Sort */
let arr2 = [5, 5, 4, 3, 2, 1, 0, 5];

for (let i = 1; i < arr2.length; i++) {
  let j = i - 1;
  let temp;
  while (j >= 0 && arr2[i] < arr2[j]) {
    temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
    i--;
    j--;
  }
}
