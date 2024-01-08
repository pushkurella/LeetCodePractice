var removeDigit = function (numb, digit) {
  const resultArr = [];
  const numbArr = numb.split("").map(Number);
  const indices = numbArr.map((num, index) => (+num === digit ? index : ""));
  for (let i = 0; i < indices.length; i++) {
    if (indices[i] || indices[i] === 0) {
      const temporaryArr = [...numbArr];
      temporaryArr.splice(indices[i], 1);
      resultArr.push(temporaryArr.join(""));
    }
  }
  return Math.max(...resultArr);
};
console.log(removeDigit("123", 3));
