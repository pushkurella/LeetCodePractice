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
var postorderTraversal = function (root) {
  const data = [];
  if (!root) return [];
  function traverse(current) {
    if (current?.left) traverse(current.left);
    if (current?.right) traverse(current.right);
    if (current) data.push(current.val);
  }
  traverse(root);

  return data;
};
var postorderTraversal = function (root) {
  const data = [],
    stack = [root];
  if (!root) return [];
  while (stack.length) {
    var node = stack.pop();
    if (node) data.unshift(node.val); // use unshift for post order to append at beginning
    if (node?.left) stack.push(node.left);
    if (node?.right) stack.push(node.right);
  }
  return data;
};
