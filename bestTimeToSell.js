// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// prices = [7, 1, 5, 3, 6, 4];
prices = [2, 1, 2, 1, 0, 1, 2];

var maxProfit = function(prices) {
  let buy = 0;
  let sell = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    //Deals with initial values
    if (i == 0) {
      buy = prices[i];
      sell = prices[i];
    }
    // When lower price is found
    else if (prices[i] < buy) {
      //check if our current buy & sell is greater than our previously recorded profit
      if (sell - buy > profit) {
        profit = sell - buy;
      }
      buy = prices[i];
      sell = 0;
    }
    //check if new price is greater than our current sell
    else if (prices[i] > buy && prices[i] > sell) {
      sell = prices[i];
    }
  }

  //final check for our profits
  if (profit < sell - buy) {
    profit = sell - buy;
  }
  return profit > 0 ? profit : 0;
};

console.log(maxProfit(prices));
