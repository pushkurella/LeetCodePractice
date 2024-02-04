var flat = function (arr, n) {
  // if n is 0, no flattening is required, hence return the original array
  if (n == 0) {
    return arr;
  }

  // create an answer array to store final result
  let answer = [];

  // traverse the array
  for (let i = 0; i < arr.length; i++) {
    // check if element is instance of array and depth is not equal to 0
    if (n > 0 && Array.isArray(arr[i])) {
      // recursively call the function for this array and push the flattened array to the answer array
      const tempArr = flat(arr[i], n - 1);
      answer.push(...tempArr);
    }
    // else directy push the current array
    else {
      answer.push(arr[i]);
    }
  }

  return answer;
};
console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);
