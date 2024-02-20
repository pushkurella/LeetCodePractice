/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const result = [];
  const values = [...map.values()].sort((a, b) => b - a).slice(0, k);
  for (const [key, value] of map.entries()) {
    let index = values.indexOf(value);
    if (index !== -1) {
      result.push(key);
      values.slice(index, 1);
    }
    if (values.length < 1) {
      break;
    }
  }
  return result;
};
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// another approach using maxHeap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const maxHeap = new MaxPriorityQueue();
  for (const [key, value] of map) {
    maxHeap.enqueue(key, value); // O(log n)
  }
  const result = [];
  while (k > 0) {
    result.push(maxHeap.dequeue().element); // O(log n)
    k--;
  }
  return result;
};
// another approach using bucket sort
var topKFrequent2 = function (nums, k) {
  const map = new Map();
  const arr = new Array(nums.length + 1).fill(0);
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [key, value] of map) {
    const prev = arr[value] || [];
    prev.push(key);
    arr[value] = prev;
  }
  arr.reverse();
  console.log(arr);
  const ans = [];
  for (let el of arr) {
    if (k < 1) break;
    if (el) {
      // for (let el2 of el) {
      ans.push(...el);
      k = k - el.length;
      // }
    }
  }
  return ans;
};
console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
