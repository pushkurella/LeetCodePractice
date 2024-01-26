/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentense, searchWord) {
  sentense = sentense.split(" ");
  for (let i = 0; i < sentense.length; i++) {
    if (sentense[i].substring(0, searchWord.length) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};
console.log(isPrefixOfWord("hellohello hellohellohello", "ell"));
// let sentense = "abc";
// console.log(sentense.startsWith("b", 2)); **

// startsWith of string checks if the other string passed as argument is present at that index in
// second argument, the second argument defaults to 0
