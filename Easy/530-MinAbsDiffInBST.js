/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) return 0;
  let minimum = Infinity;
  let lastValue = Infinity;
  function traverse(current) {
    if (current.left) traverse(current.left);
    let diff = Math.abs(lastValue - current.val);
    if (minimum > diff) {
      minimum = diff;
    }
    lastValue = current.val;
    if (current.right) traverse(current.right);
  }
  traverse(root);
  return minimum;
};
// Iterative approach
var getMinimumDifference = function (root) {
  if (!root) return 0;
  let minimum = Infinity;
  let lastValue = Infinity;
  var stack = [];
  while (stack.length || root) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    let diff = Math.abs(lastValue - root.val);
    if (minimum > diff) {
      minimum = diff;
    }
    lastValue = root.val;
    root = root.right;
  }
  return minimum;
};
