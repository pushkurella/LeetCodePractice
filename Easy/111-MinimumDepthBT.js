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
var minDepth = function (root) {
  if (!root) return 0;
  var queue = [root];
  let depth = 1;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      var current = queue.shift();
      if (current.left === null && current.right === null) {
        return depth;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    depth++;
  }
};
