/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  let i = 0,
    j = values.length - 1,
    max = 0;
  while (i <= values.length / 2) {
    const sum = values[i++] + values[j--];
    if (max < sum) max = sum;
  }
  return max;
};
// Travel half using fast, slow pointer and add values from slow pointer and head pointer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;

  // find midpoint of listNode
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half of listNode
  let prev = null;
  let nextNode = new ListNode();
  while (slow) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let maxVal = 0;
  // get max pair
  while (prev) {
    maxVal = Math.max(maxVal, prev.val + head.val);
    head = head.next;
    prev = prev.next;
  }

  return maxVal;
};
