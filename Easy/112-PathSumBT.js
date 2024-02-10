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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let stack = [root];
  let sumStack = [root.val];
  while (stack.length) {
    var node = stack.pop();
    let sum = sumStack.pop();
    if (node.left === null && node.right === null && sum === targetSum) {
      return true;
    }
    if (node.left) {
      stack.push(node.left);
      sumStack.push(sum + node.val);
    }
    if (node.right) {
      stack.push(node.right);
      sumStack.push(sum + node.val);
    }
  }
  return false;
};
