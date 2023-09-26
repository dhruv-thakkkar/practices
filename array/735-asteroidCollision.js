
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];
    if (a > 0 || stack.length === 0 || stack[stack.length - 1] < 0) {
      stack.push(a);
    }
    if (a < 0) {
      let x = stack.pop();
      if (x > 0) {
        if (Math.abs(a) > x) {
          i--;
        } else if (Math.abs(a) < x) {
          stack.push(x);
        }
      } else {
        stack.push(a);
      }
    }
  }
  return stack;
};
