var plusOne = function (digits) {
  if (digits.length > 16) {
    let firstHalf = digits.slice(0, 16).join("");
    let secondHalf = digits.slice(16, digits.length).join("");
    let thirdHalf = "";
    let result = "";
    if (digits.length > 32) {
      secondHalf = digits.slice(16, 32).join("");
      thirdHalf = digits.slice(32, digits.length).join("");
    }
    console.log(firstHalf, secondHalf, thirdHalf);
    if (thirdHalf.length > 0) {
      thirdHalf = +thirdHalf + 1;
      result = firstHalf + secondHalf + thirdHalf;
    } else {
      secondHalf = +secondHalf + 1;
      result = firstHalf + secondHalf;
    }
    return result;
  }
  let result = digits.reduce((a, b) => a + b, "");
  result = +result + 1;
  return result.toString().split("");
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
