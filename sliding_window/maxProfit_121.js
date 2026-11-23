var maxProfit = function (prices) {
    let left = 0;
    let right = 0;
    let maxprofit = 0;

    while (right < prices.length) {
        if (prices[right] < prices[left]) {
            left = right;
        }
        else {
            let profit = prices[right] - prices[left]
            maxprofit = Math.max(profit, maxprofit)
        }
        right++;
    }
    return maxprofit;
};
