// var strStr = function (haystack, needle) {
//   let indexFound = -1;
//   let firstChar = Array.from(needle)[0];
//   let firstIndex = haystack.indexOf(firstChar);
//   let lastIndex = haystack.lastIndexOf(firstChar);
//     while (firstIndex <= lastIndex) {
//       if (haystack.substring(firstIndex, firstIndex + needle.length) === needle) {
//         indexFound = firstIndex;
//         return indexFound;
//       }
//       firstIndex++;
//     }
//     return indexFound;
// };
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// var strStr = function (haystack, needle) {
//   let regex = new RegExp(needle);
//   return haystack.search(needle);
// };
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let isMatchFound = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatchFound = false;
        break;
      }
    }
    if (isMatchFound) return i;
  }
  return -1;
};
console.log(strStr("mississippi", "issip"));
