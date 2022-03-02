/*
if multiple of 3 and 5 print fizzbuzz
if multiple of 3 but not 5 print fizz
if not multiple of 5 but not 3
if multiple of 3 or 5
*/
let n = 15;
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0 && i % 5 != 0) {
    console.log("fizz");
  } else if (i % 3 != 0 && i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 != 0 || i % 5 != 0) {
    console.log(i);
  }
}

/* Optimzed */
let n = 15;
for (let i = 1; i <= n; i++) {
  if (i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
