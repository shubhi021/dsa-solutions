var maxProfit = function(prices) {
    let left = 0;   // buy day
    let right = 1;  // sell day
    let maxProfit = 0;

    while (right < prices.length) {

        // profitable transaction
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            // found a cheaper buying day
            left = right;
        }

        right++;
    }

    return maxProfit;
};
