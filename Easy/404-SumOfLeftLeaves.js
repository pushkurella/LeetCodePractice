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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  var stack = [root];
  let leftCount = 0;
  while (stack.length) {
    const current = stack.pop();
    if (current.left) {
      stack.push(current.left);
      var temp = current.left;
      if (temp.left === null && temp.right === null) {
        leftCount += temp.val;
      }
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return leftCount;
};
