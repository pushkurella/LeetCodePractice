var isPalindrome = function (x) {
  let input = x;
  if (x < 0) {
    return false;
  }
  let reverse = 0;
  while (x !== 0) {
    let remainder = x % 10;
    reverse = reverse * 10 + remainder;
    x = Math.floor(x / 10);
  }
  console.log(reverse, input);
  return input === reverse;
};
