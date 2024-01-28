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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let current = root;
  let total = 0;
  function traverse(node) {
    if (node.val >= low && node.val <= high) total += node.val;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return total;
};
