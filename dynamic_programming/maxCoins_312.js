var maxCoins = function (nums) {
    nums = [1, ...nums, 1];
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));


    for (let gap = 2; gap < n; gap++) {
        for (let left = 0; left + gap < n; left++) {
            let right = left + gap;
            for (let i = left + 1; i < right; i++) {
                let coins = nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right];
                dp[left][right] = Math.max(dp[left][right], coins)
            }
        }
    }
    return dp[0][n - 1];
};
