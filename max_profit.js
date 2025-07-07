
    
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
  