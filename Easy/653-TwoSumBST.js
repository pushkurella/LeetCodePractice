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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  var map = new Map();
  let isExists = false;
  function traverse(current) {
    if (map.has(k - current.val)) {
      isExists = true;
    } else map.set(current.val, current.val);
    if (current?.left) traverse(current.left);
    if (current?.right) traverse(current.right);
  }
  traverse(root);
  return isExists;
};
// Iterative approach
var findTarget = function (root, k) {
  var map = new Map();
  const queue = [root];
  while (queue.length > 0) {
    var node = queue.pop();
    if (map.has(k - node.val)) {
      return true;
    }
    map.set(node.val, node.val);
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
  }
  return false;
};

//input
// root = [5,3,6,2,4,null,7] k =28
