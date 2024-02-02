/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head;
  let length = 0;
  while (current !== null) {
    length++;
    current = current.next;
  }
  current = head;
  length = length - n;
  if (length === 0) return head.next;
  while (length > 0) {
    if (length === 1) {
      current.next = current.next.next;
    } else current = current.next;
    length--;
  }
  return head;
};
// Better approach
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let lagger = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    // if fast is null
    return head.next;
  }
  while (fast && fast.next) {
    lagger = lagger.next;
    fast = fast.next;
  }

  lagger.next = lagger.next.next;
  return head;
};
