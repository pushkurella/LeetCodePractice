var replaceElements = function (arr) {
  let lastElement = arr[arr.length - 1];
  let highestElement = lastElement;
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    highestElement = Math.max(highestElement, lastElement);
    lastElement = arr[i];
    arr[i] = highestElement;
  }
  return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
