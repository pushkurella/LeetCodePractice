var maximumWealth = function (accounts) {
  const result = accounts.map((account) => {
    let res = 0;
    let total = account.reduce((a, b) => a + b, 0);
    if (total > res) res = total;
    return res;
  });
  return Math.max(...result);
};
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
