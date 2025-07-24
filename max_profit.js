
    //Best Time to Buy and Sell Stock I

//     Example 1
// Input
// prices = [7, 1, 5, 3, 6, 4]

// Output
// Max Profit: 5

// Explanation
// Buy on day 2 (price = 1).
// Sell on day 5 (price = 6).
// Profit = 6 - 1 = 5./



    let prices = [7,1,3,5,8,2];
    
    let min_price = Infinity; 
    let max_profit = 0;       

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min_price) {
        min_price = prices[i]; 
      } else {
        let profit = prices[i] - min_price; 
                if (profit > max_profit) {
          max_profit = profit; 
        }
      }
    }

    console.log( max_profit);
  