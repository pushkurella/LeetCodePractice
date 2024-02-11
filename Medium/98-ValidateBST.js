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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let min = -Infinity;
  let isValid = true;
  function traverse(current) {
    if (current.left) traverse(current.left);
    if (min >= current.val) {
      isValid = false;
    }
    min = current.val;
    if (current.right) traverse(current.right);
  }
  traverse(root);
  return isValid;
};
// Iterative approach
var isValidBST = function (root) {
  if (!root) return true;
  var stack = [];
  var data = [];
  let minValue = -Infinity;
  while (stack.length > 0 || root != null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (minValue >= root.val) {
      return false;
    }
    minValue = root.val;
    data.push(root.value);
    root = root.right;
  }
  return true;
};
