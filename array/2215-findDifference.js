let nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
nums1 = new Set(nums1);
nums2 = new Set(nums2);

for (const key of nums1) {
  if (nums2.has(key)) {
    nums1.delete(key);
    nums2.delete(key);
  }
}
console.log(Array.from(nums1), Array.from(num2));
console.log(nums2);
