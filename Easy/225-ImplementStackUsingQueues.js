var MyStack = function () {
  this.queue = new Queue();
  this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.enqueue(x);
  this.array.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  this.queue.clear();
  const lastElement = this.array.pop();
  for (const ele of this.array) {
    this.queue.enqueue(ele);
  }
  return lastElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.back();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.size() === 0;
};

// another approach
class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  top() {
    return this.q[0];
  }

  empty() {
    return this.q.length === 0;
  }
}
