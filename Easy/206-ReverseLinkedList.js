/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let prev = null;
  let currentNode;
  while (head !== null) {
    currentNode = new ListNode(head.val);
    currentNode.next = prev;
    prev = currentNode;
    head = head.next;
  }
  // console.log(currentNode)
  return currentNode;
};

// Better approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    // for looping
    curr = next;
  }
  return prev;
};
