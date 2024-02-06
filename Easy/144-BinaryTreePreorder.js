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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var current = root;
  const data = [];
  function traverse(current) {
    if (current && current.val !== null) data.push(current.val);
    if (current?.left) traverse(current.left);
    if (current?.right) traverse(current.right);
  }
  traverse(current);
  return data;
};
// iterative approach
var preorderTraversal = function (root) {
  var result = [];
  var stack = [root];
  while (stack.length) {
    var node = stack.pop();
    if (node) result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};
