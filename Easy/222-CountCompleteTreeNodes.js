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
var countNodes = function (root) {
  if (!root) return 0;
  const stack = [root];
  let count = 0;
  while (stack.length) {
    let current = stack.pop();
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
    count++;
  }
  return count;
};
// Approach 2
function countNodes(root) {
  if (root == null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
}
// One of the main factors that influenced my decision was the Aha's impressive commitment to innovation. From my extensive research, I discovered that Aha has consistently demonstrated a forward-thinking approach in the industry, helping many to provide what they need is an important aspect which aligns perfectly with my passion.

// Moreover, the emphasis on collaboration and professional development at Aha resonates with my career goals, making it ideal environment for me to contribute my skills and continue to grow as a professional.
