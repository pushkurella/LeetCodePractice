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
var isSymmetric = function (root) {
  var stack = [root, root];
  while (stack.length > 0) {
    var n1 = stack.pop();
    var n2 = stack.pop();
    if (!n1 && !n2) continue;
    if ((!n1 && n2) || (!n2 && n1) || n1.val !== n2.val) {
      return false;
    }
    stack.push(n1.left);
    stack.push(n2.right);

    stack.push(n1.right);
    stack.push(n2.left);
  }
  return true;
};
