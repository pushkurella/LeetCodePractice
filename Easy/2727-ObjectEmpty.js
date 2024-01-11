/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const prop in obj) {
    if (prop || prop === "") return false;
  }
  return true;
};
console.log(isEmpty({ "": "" }));
