/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const words = s.split(' ');
    let result = '';
    for(let i=0; i< k; i++){
        result += words[i] + ' ';
    }
    return result.trim();
};

// another approach
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
 return s.split(' ').slice(0,k).join(" ")  }
