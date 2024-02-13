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
var findSecondMinimumValue = function (root) {
  if (!root) return -1;
  const obj = {};
  function traverse(current) {
    if (current.left) traverse(current.left);
    obj[current.val] = current.val;
    if (current.right) traverse(current.right);
  }
  traverse(root);
  const arr = [...Object.values(obj)];
  if (arr[1] === undefined) {
    return -1;
  }
  return arr[1];
};
