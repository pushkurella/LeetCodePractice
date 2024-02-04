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
var inorderTraversal = function (root) {
  var data = [];
  var current = root;
  function traverse(current) {
    if (current.left) {
      traverse(current.left);
    }
    if (current.val !== null) data.push(current.val);
    if (current.right) {
      traverse(current.right);
    }
  }
  if (current) traverse(current);
  return data;
};

// Iterative approach
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
