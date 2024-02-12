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
var kthLargestLevelSum = function (root, k) {
  if (!root) return 0;
  const queue = [root];
  const values = [];
  while (queue.length) {
    let max = -Infinity;
    let length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      const current = queue[i];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      sum += current.val;
      if (sum > max) max = sum;
    }
    queue.splice(0, length);
    values.push(sum);
  }
  values.sort((a, b) => b - a);
  if (values[k - 1] === undefined) {
    return -1;
  }
  return values[k - 1];
};
