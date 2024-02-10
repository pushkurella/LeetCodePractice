/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let verticalBars = 0;
  let asteriskCount = 0;
  for (const letter of s) {
    if (letter === "*" && verticalBars % 2 === 0) {
      asteriskCount++;
    }
    if (letter === "|") {
      verticalBars++;
    }
  }
  return asteriskCount;
};
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
