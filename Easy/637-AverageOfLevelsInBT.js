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
var averageOfLevels = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    let length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      const node = queue[i];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      sum += node.val;
    }
    queue.splice(0, length);
    result.push((sum / length).toFixed(5));
  }
  return result;
};
// Recursive

var averageOfLevels = function (root) {
  let list = [];
  let count = [];
  function level_sum(root, level) {
    if (root == null) return;
    if (list.length <= level) {
      list.push(0.0);
      count.push(0);
    }
    list[level] += root.val;
    count[level] += 1;
    level_sum(root.left, level + 1);
    level_sum(root.right, level + 1);
  }
  level_sum(root, 0);
  for (let level = 0; level < list.length; level++) {
    list[level] = list[level] / count[level];
  }
  return list;
};
