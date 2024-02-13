/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
  // remove extra spaces left and right
  s = s.trim();
  const parity = s[0];
  // remove the symbol + or - if the string contains it
  if (parity === "-" || parity === "+") {
    s = s.substring(1);
  }
  let result = "";
  // to verify if string contain numbers
  const regex = new RegExp(/\d/);
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      result += s[i];
    } else {
      // break out of loop if non digit is found
      break;
    }
  }
  result = Number(result);
  if (parity === "-") {
    result = 0 - result;
  }
  const bigInt = Math.pow(2, 31);
  // Return clamped value if its out of range
  if (result > bigInt - 1) {
    return bigInt - 1;
  } else if (result < 0 - bigInt) {
    return 0 - bigInt;
  }
  return result;
};
// another approach
var myAtoi = function (str) {
  str = str.trim();
  if (!str) return 0;
  var sign = 1;
  var i = 0;
  var answer = 0;
  if (str[i] == "+") {
    sign = 1;
    i++;
  } else if (str[i] == "-") {
    sign = -1;
    i++;
  }

  for (; i < str.length; i++) {
    var temp = str.charCodeAt(i) - 48;
    if (temp > 9 || temp < 0) break;
    if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10)
      return sign == 1 ? 2147483647 : -2147483648;
    else answer = answer * 10 + temp;
  }
  return answer * sign;
};
