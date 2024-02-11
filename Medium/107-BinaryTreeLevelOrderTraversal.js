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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    let length = queue.length;
    const values = [];
    for (let i = 0; i < length; i++) {
      let current = queue[i];
      values.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    queue.splice(0, length);
    result.push(values);
  }
  return result.reverse();
};
