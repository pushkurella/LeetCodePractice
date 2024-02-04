/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let initialAltitude = 0;
  let maxAltitude = initialAltitude;
  for (let i = 0; i < gain.length; i++) {
    // let temp = initialAltitude + gain[i];
    maxAltitude = Math.max(initialAltitude + gain[i], maxAltitude);
    initialAltitude += gain[i];
  }
  return maxAltitude;
};
// Approach without using Math.max
const largestAltitude = (gain) => {
  let previous = 0;
  let biggest = 0;

  for (let i = 0; i < gain.length; i += 1) {
    previous += gain[i];
    if (previous > biggest) biggest = previous;
  }

  return biggest;
};
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
