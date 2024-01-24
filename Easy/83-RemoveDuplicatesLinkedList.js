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
var deleteDuplicates = function (head) {
  const map = new Map();
  let tempHead = head;
  while (tempHead) {
    if (map.has(tempHead.val)) {
      let pastNode = map.get(tempHead.val);
      pastNode.next = tempHead.next;
    } else {
      map.set(tempHead.val, tempHead);
    }
    tempHead = tempHead.next;
  }
  return head;
};
// var deleteDuplicates = function(head) {
//     var current = head;

//     while(current) {
//         if(current.next !== null && current.val == current.next.val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }

//     return head;
// };
