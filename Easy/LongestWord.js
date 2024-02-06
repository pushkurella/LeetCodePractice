// find longest word in a sentense ignore pronunciation
function LongestWord(sen) {
  let arr = sen.split(" ");
  arr = arr.map((a) => a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
  arr.sort((a, b) => b.length - a.length);
  return arr[0];
}
console.log(LongestWord("I love12 dogs3!"));
