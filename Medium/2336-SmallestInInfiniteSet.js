var SmallestInfiniteSet = function () {
  this.minHeap = new MinPriorityQueue();
  this.set = new Set();
  for (let i = 1; i <= 1000; i++) {
    this.minHeap.enqueue(i, i);
    this.set.add(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const { element } = this.minHeap.dequeue();
  this.set.delete(element);
  return element;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.set.has(num)) {
    this.minHeap.enqueue(num, num);
    this.set.add(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// Better approach
class SmallestInfiniteSet {
  constructor() {
    this.arr = new Array(1001).fill(true);
  }
  popSmallest() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
  }
  addBack(num) {
    this.arr[num] = true;
  }
}
