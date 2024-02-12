/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;
  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);
  return root;
};
// Iterative
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return undefined;

  const root = new TreeNode(0);
  const nodesToCheck = [{ node: root, floor: 0, ceiling: nums.length - 1 }];

  while (nodesToCheck.length) {
    const { node, floor, ceiling } = nodesToCheck.pop();
    const middle = Math.ceil((floor + ceiling) / 2);

    node.val = nums[middle];

    if (floor < middle) {
      node.left = new TreeNode(0);
      nodesToCheck.push({ node: node.left, floor, ceiling: middle - 1 });
    }

    if (ceiling > middle) {
      node.right = new TreeNode(0);
      nodesToCheck.push({ node: node.right, floor: middle + 1, ceiling });
    }
  }

  return root;
};
