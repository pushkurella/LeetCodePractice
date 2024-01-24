/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(" ");
  if (pattern.length !== arr.length) return false;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    // if pattern is already found retrieve it and verify with the associated string from map
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== arr[i]) {
        return false;
      }
    } else {
      // if the string already exists return false as this will be for the new pattern
      if (Array.from(map.values()).includes(arr[i])) {
        return false;
      }
      map.set(pattern[i], arr[i]);
    }
  }
  return true;
};
