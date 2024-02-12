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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return 0;
  const values = [];
  function traverse(current) {
    if (!root) return;
    if (current.left) traverse(current.left);
    values.push(current.val);
    if (current.right) traverse(current.right);
  }
  traverse(root);
  console.log(values);
  if (values[k - 1] === undefined) {
    return -1;
  }
  return values[k - 1];
};
// Iterative approach
var kthSmallest = function (root, k) {
  if (!root) return 0;
  const values = [];
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    values.push(root.val);
    root = root.right;
    if (values.length === k) {
      return values[k - 1];
    }
  }
  return -1;
};
