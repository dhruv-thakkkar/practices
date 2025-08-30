let nums1 = [1, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3;

let num1L = nums1.length;
for (let i = m; i < num1L; i++) {
  nums1[i] = nums2[i - m];
}

console.log("before nums1--->", nums1);
if (num1L > 1) {
  for (let i = 0; i < num1L; i++) {
    console.log("nums1[i]---->>", nums1[i]);
    for (let j = 0; j < num1L; j++) {
      console.log("nums1[j]---->>", nums1[j]);
    }
    console.log("xxxxxxxxxx");

    /* let j = i + 1;
    if (nums1[i] > nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
    } */
  }
}

console.log("result-->", nums1);
