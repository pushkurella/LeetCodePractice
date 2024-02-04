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
var findMode = function (root) {
  var current = root;
  var obj = {};
  function traverse(current) {
    if (current.val !== null) {
      if (obj[current.val] !== undefined) {
        obj[current.val] = (obj[current.val] || 0) + 1;
      } else obj[current.val] = 1;
    }
    if (current.left) {
      traverse(current.left);
    }
    if (current.right) {
      traverse(current.right);
    }
  }
  traverse(current);
  const max = [];
  const maxTimes = Math.max(...Object.values(obj));
  Object.entries(obj).forEach(([key, value]) => {
    if (value === maxTimes) {
      max.push(Number(key));
    }
  });
  return max;
};
// Better approach

var findMode = function (root) {
  let currentVal = null;
  let currentCount = 0;
  let maxCount = 0;
  let modes = [];

  function inOrderTraversal(node) {
    if (!node) return;

    inOrderTraversal(node.left);

    currentCount = node.val === currentVal ? currentCount + 1 : 1;
    if (currentCount === maxCount) {
      modes.push(node.val);
    } else if (currentCount > maxCount) {
      maxCount = currentCount;
      modes = [node.val];
    }
    currentVal = node.val;

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return modes;
};
// in order traversal implies the values are in sorted order in BST
