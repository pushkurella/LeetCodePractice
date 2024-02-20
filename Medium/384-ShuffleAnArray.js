/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const clone = [...this.nums];
  for (let i = 0; i < clone.length; i++) {
    const randomNumber = Math.floor(Math.random() * clone.length);
    swap(clone, i, randomNumber);
  }
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return clone;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// another approach

var Solution = function (nums) {
  this.nums = nums;
  this.rand = [...nums];
};

Solution.prototype.reset = function () {
  return this.nums;
};

Solution.prototype.shuffle = function () {
  const swap = (a, i, j) => ([a[i], a[j]] = [a[j], a[i]]);
  const len = this.rand.length;
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len);
    swap(this.rand, i, j);
  }
  return this.rand;
};
