var isPalindrome = function (s) {
  const str = [];
  for (const letter of s) {
    let charCode = letter.toLowerCase().charCodeAt(0);
    if (
      (charCode >= 65 && charCode <= 90) || // for caps
      (charCode >= 97 && charCode <= 122) || // for lower case
      (charCode >= 48 && charCode <= 57) // for numbers
    ) {
      str.push(letter.toLowerCase());
    }
  }
  //   console.log(str, str.join(""), str.reverse().join(""));
  return str.join("") === str.reverse().join("");
};
// Better approach
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
