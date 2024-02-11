/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  var stackP = [p];
  var stackQ = [q];
  while (stackP.length || stackQ.length) {
    var nodeP = stackP.pop();
    var nodeQ = stackQ.pop();
    if (nodeP?.val !== nodeQ?.val) {
      return false;
    }
    if (nodeP.left || nodeQ.left) {
      stackP.push(nodeP?.left);
      stackQ.push(nodeQ?.left);
    }
    if (nodeP.right || nodeQ.right) {
      stackP.push(nodeP?.right);
      stackQ.push(nodeQ?.right);
    }
  }
  return true;
};
