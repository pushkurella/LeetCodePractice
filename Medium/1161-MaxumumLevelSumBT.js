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
var maxLevelSum = function (root) {
  if (!root) return 0;
  const queue = [root];
  const map = new Map();
  let level = 0;
  while (queue.length) {
    const length = queue.length;
    let nodeSum = 0;
    for (let i = 0; i < length; i++) {
      const current = queue[i];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      nodeSum += current.val;
    }
    queue.splice(0, length);
    level++;
    if (!map.has(nodeSum)) map.set(nodeSum, level);
  }
  const maxNodeSum = Math.max(...map.keys());
  return map.get(maxNodeSum);
};
// Recursive
var maxLevelSum = function (root) {
  const sums = [-Infinity];
  callDFS(root, 1);
  return sums.indexOf(Math.max(...sums));

  function callDFS(node, level) {
    if (!node) return;
    if (sums[level] === undefined) sums.push(node.val);
    else sums[level] += node.val;

    callDFS(node.left, level + 1);
    callDFS(node.right, level + 1);
  }
};
