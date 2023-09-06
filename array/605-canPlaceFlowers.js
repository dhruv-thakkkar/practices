/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let index = 1; index <= n; index++) {
    for (let j = 0; j < flowerbed.length; j++) {
      let currentFlower = flowerbed[j];
      let preFlower = flowerbed[j - 1];
      let postFlower = flowerbed[j + 1];
      if (currentFlower == 0 && preFlower != 1 && postFlower != 1) {
        count++;
        flowerbed[j] = 1;
        break;
      }
    }
  }

  return count == n;
};
