/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let result = "";
  if (word1.length === 0 && word2.length === 0) return "";
  if (word1.length === 0) return word2;
  if (word2.length === 0) return word1;
  while (i < word1.length && j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }
  while (i < word1.length) {
    result += word1[i];
    i++;
  }
  while (j < word2.length) {
    result += word2[j];
    j++;
  }
  return result;
};
// Better approach
const mergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] || "") + (b[i] || "");
  }

  return result;
};
