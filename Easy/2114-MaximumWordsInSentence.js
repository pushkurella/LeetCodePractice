/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max= 0;
    for(const sentence of sentences){
        const wordCount = sentence.split(' ').length;
        max = Math.max(max, wordCount);
    }
    return max;
};
