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
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;
  let current = head;
  let oddTemp = head;
  let evenTemp = head.next;
  let evenHead = evenTemp;
  let counter = 1;
  while (current !== null) {
    if (counter % 2 === 1) {
      oddTemp.next = oddTemp.next?.next || null;
      // get last pointer whose next is not null as we need it later
      oddTemp = oddTemp.next !== null ? oddTemp.next : oddTemp;
    } else {
      evenTemp.next = evenTemp.next?.next || null;
      evenTemp = evenTemp.next;
    }
    current = current.next;
    counter++;
  }
  oddTemp.next = evenHead;
  return head;
};
// Better approach
var oddEvenList = function (head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    // first half
    odd.next = even.next;
    odd = odd.next;
    // second half
    even.next = odd.next;
    even = even.next;
  }
  // attach end to evenHead
  odd.next = evenHead;
  return head;
};
