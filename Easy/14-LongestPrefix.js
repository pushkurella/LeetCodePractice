// var longestCommonPrefix = function (str) {
//   str = str.sort((a, b) => a.length - b.length);
//   console.log(str);
//   let first = str[0]; // flow
//   let result = "";
//   for (let i = 0; i < first.length; i++) {
//     result = result + first.charAt(i);
//     const areValidStrings = str.every((word) => word.startsWith(result));
//     if (!areValidStrings) {
//       return result.substring(0, result.length - 1);
//     }
//   }
//   return result;
// };

// Better approach
var longestCommonPrefix = function (strs) {
  strs.sort();
  console.log(strs);
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0, i);
    }
  }
  return strs[0];
};
console.log(
  longestCommonPrefix(["flee", "flow", "flight", "flower", "dog", "abababa"])
);
