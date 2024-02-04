// const maxProfit = (prices) => {
//   let left = 0; // Buy
//   let right = 1; // sell
//   let max_profit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left]; // our current profit

//       max_profit = Math.max(max_profit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
// };
// Another approach
// var maxProfit = function (prices) {
//   if (prices == null || prices.length <= 1) return 0;
//   let minBuy = prices[0];
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     minBuy = Math.min(minBuy, prices[i]);
//     profit = Math.max(profit, prices[i] - minBuy);
//   }
//   return profit;
// };
// another
var maxProfit = function (prices) {
  if (prices == null || prices.length <= 1) return 0;
  let minBuy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (minBuy > prices[i]) {
      minBuy = prices[i];
    } else {
      let currentProfit = prices[i] - minBuy;
      profit = Math.max(currentProfit, profit);
    }
  }
  return profit;
};
console.log(maxProfit([7, 2, 4, 5, 6]));
