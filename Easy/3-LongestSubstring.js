// Longest substring without repeating characters
// Approach - without using sliding window
// var lengthOfLongestSubstring = function (s) {
//   if (s.length < 2) return s.length;
//   let map = new Map();
//   let maxCount = 0;
//   let tempCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       i -= tempCount;
//       tempCount = 0;
//       map.clear();
//     } else {
//       map.set(s[i], s[i]);
//       tempCount++;
//     }
//     maxCount = Math.max(maxCount, tempCount);
//   }
//   return maxCount;
// };
// using dynamic sliding window approach
var lengthOfLongestSubstring = function (s) {
  const setMap = new Set();
  let max = 0;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    // delete letter from starting index until it has the key
    while (setMap.has(key)) {
      setMap.delete(s[index]);
      index++; // update index to go to next letter
    }
    setMap.add(key);
    max = Math.max(max, setMap.size);
  }
  return max;
};
console.log(lengthOfLongestSubstring("qrsrvbspk"));
//qrsvbspk 5
