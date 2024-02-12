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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  if (!root) return false;
  const queue = [root];
  let level = 0;
  while (queue.length) {
    let length = queue.length;
    let lastNumber = level % 2 === 0 ? -Infinity : Infinity;
    for (let i = 0; i < length; i++) {
      const current = queue[i];
      if (level % 2 === 0) {
        if (current.val % 2 === 0 || current.val - lastNumber <= 0)
          return false;
        lastNumber = current.val;
      } else {
        if (current.val % 2 === 1 || current.val - lastNumber >= 0)
          return false;
        lastNumber = current.val;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    queue.splice(0, length);
    level++;
  }
  return true;
};
