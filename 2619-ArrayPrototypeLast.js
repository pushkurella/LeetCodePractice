Array.prototype.last = function () {
  const arr = Object.values(this);
  if (arr.length === 0) {
    return -1;
  }
  return arr[arr.length - 1];
};

// Recommended
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
