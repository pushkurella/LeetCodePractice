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
var middleNode = function (head) {
  let length = 0;
  let tempHead = head;
  while (tempHead) {
    tempHead = tempHead.next;
    length++;
  }
  let middle = Math.floor(length / 2);
  while (middle > 0) {
    head = head.next;
    middle--;
  }
  console.log(head);
  return head;
};

// console.log(middleNode())
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
var middleNode = function (head) {
  let half = head;
  let end = head;
  while (end !== null && end.next !== null) {
    half = half.next;
    end = end.next.next;
  }
  return half;
};
