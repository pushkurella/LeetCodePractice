/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (const letter of t) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) - 1);
    } else {
      return false;
    }
  }

  let val = Array.from(map.values()).reduce(
    (val1, val2) => val1 * val1 + val2 * val2
  );
  //   console.log(map);
  let result = Array.from(map.values()).every((val) => val === 0);
  //   console.log("resu", result);
  return result;
};
console.log("!1", !1); // false
console.log("!0", !0); // true
console.log(isAnagram("anagram", "nagaram"));
