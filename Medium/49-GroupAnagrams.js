/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    console.log(key);
    if (map.has(key)) {
      const arr = map.get(key);
      arr.push(strs[i]);
      map.set(key, arr);
    } else map.set(key, [strs[i]]);
  }
  return [...map.values()];
};

// approach through frequency
function getFrequencyString(str) {
  const map = {};
  for (let letter of str) {
    map[letter] = (map[letter] || 0) + 1;
  }
  let result = "";
  Object.keys(map)
    .sort()
    .forEach((key) => {
      result += key + map[key];
    });
  return result;
}
var groupAnagrams2 = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const key = getFrequencyString(strs[i]);
    if (map[key]) {
      const arr = map[key];
      arr.push(strs[i]);
      map[key] = arr;
    } else map[key] = [strs[i]];
  }
  return [...Object.values(map)];
};
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
// another approach
var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
