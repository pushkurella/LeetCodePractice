/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function getSum(node) {
    let str = "";
    while (node) {
      str += node.val;
      node = node.next;
    }
    return BigInt(str.split("").reverse().join("").toString());
  }
  let total = getSum(l1) + getSum(l2);
  const totalArray = Array.from(total.toString());
  let previous = null;
  let node = null;
  for (const value of totalArray) {
    console.log(value);
    node = new ListNode(BigInt(value));
    node.next = previous;
    previous = node;
  }
  console.log(node);
  return node;
};
// Better approach
// This approach works because if you consider two number 49959 and 197, if you add them
// like (4+1, 9+9, 9+1, 5+0, 9+0) you will get the solution with the help of carry
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let cursor = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    cursor.next = new ListNode();
    cursor = cursor.next;
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val >= 10 ? 1 : 0;
    cursor.val = val % 10;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};
