var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  let head = new TreeNode(max);
  console.log("-------")
  console.log("nums-->",nums)
  console.log("max-->",max)
  console.log("index-->",index)
  //console.log("head-->",head)
  head.left = constructMaximumBinaryTree(nums.slice(0, index));
  head.right = constructMaximumBinaryTree(nums.slice(index + 1));
  console.log("head.left--->",head.left)
  console.log("head.right--->",head.right)
  return head;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
