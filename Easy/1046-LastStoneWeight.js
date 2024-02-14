/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  var stoneHeap = new MaxPriorityQueue();
  for (const stone of stones) {
    stoneHeap.enqueue(stone);
  }
  while (stoneHeap.size() > 1) {
    let first = stoneHeap.dequeue().element;
    let second = stoneHeap.dequeue().element;
    if (first > second) {
      stoneHeap.enqueue(first - second);
    }
  }
  if (stoneHeap.size() === 1) {
    return stoneHeap.dequeue().element;
  }
  return 0;
};
// another approach
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); //sort the remaining stones in decending order;
    stones[1] = stones[0] - stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
    stones.shift(); //shift the array to get rid of the 0 index
  }
  return stones[0]; //return the 0 index value ie the resultl
};
