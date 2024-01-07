var mySqrt = function (x) {
  for (let i = 0; i <= x / 2 + 1; i++) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
  }
};

console.log(mySqrt(65));
