/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let index = 0;
  const map = new Map();
  while (current) {
    map.set(index, current.val);
    current = current.next;
    index++;
  }
  current = head;
  index = 0;
  while (current && index <= map.size / 2) {
    if (map.get(index) !== map.get(map.size - index - 1)) {
      return false;
    }
    current = current.next;
    index++;
  }
  return true;
};

// Fantastic approach
var isPalindrome = function (head) {
  let string1 = "",
    string2 = "";
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};
