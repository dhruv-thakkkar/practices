let arr = [4, 2, 2, 4, 4, 3, 5];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (map.has(element)) {
    map.set(element, map.get(element) + 1);
  } else {
    map.set(element, 1);
  }
}
console.log(map);
console.log(map.values());
let newSet = new Set();
for (const iterator of map.values()) {
  if (newSet.has(iterator)) {
    console.log(iterator);
    break;
  }
  newSet.add(iterator);
}
console.log(newSet);
