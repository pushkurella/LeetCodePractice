function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] || cache[key] === 0) return cache[key];
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}
const memoizedSum = memoize(function (a, b) {
  return a + b;
});
console.log(memoizedSum(0, 0));

console.log(memoizedSum(0, 0));
