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
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    let rightValue = "";
    for (let i = 0; i < length; i++) {
      const current = queue[i];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      rightValue = current.val;
    }
    queue.splice(0, length);
    result.push(rightValue);
  }
  return result;
};
// Recursive
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  pre(root, 0);
  return res;

  function pre(node, h) {
    if (!node) return;
    res[h] = node.val;
    pre(node.left, h + 1);
    pre(node.right, h + 1);
  }
};
