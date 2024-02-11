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
var maxDepth = function (root) {
  if (!root) return 0;
  var queue = [root];
  let depth = 0;
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  }
  return depth;
};
// Approach without shift and using splice(startIndex, deleteCount)
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
    // for example queue length is 2, we are just removing those two as splice is removing elements from the start
    // if there are more elements the loop continues
  }
  return depth;
};
