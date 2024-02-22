/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    map[heights[i]] = names[i];
  }
  return [...Object.values(map)].reverse();
};
