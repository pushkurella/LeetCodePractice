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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  var queue = [root];
  var result = [];
  let i = 0;
  while (queue.length) {
    let length = queue.length;
    const values = [];
    for (let i = 0; i < length; i++) {
      var node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    i++;
    if (i % 2 !== 0) {
      result.push(values);
    } else {
      result.push(values.reverse());
    }
  }
  return result;
};
// Another approach
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let output = [];
  let deep = 0;
  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (deep % 2 == 0) level.push(node.val);
      else level.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
    deep++;
  }

  return output;
};
