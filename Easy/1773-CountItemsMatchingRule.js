/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  items = items.map(([type, color, name]) => {
    const obj = {
      type,
      color,
      name,
    };
    return obj;
  });
  const result = items.filter((item) => item[ruleKey] === ruleValue);
  return result.length;
};
// Another approach
const map = {
  type: 0,
  color: 1,
  name: 2,
};

const countMatches = (items, key, value) =>
  items.filter((i) => i[map[key]] == value).length;
