var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let dp1=0;
    let dp2=1;

    for(let i=n-1;i>=0;i--)
    {
        const curr= cost[i] + Math.min(dp1,dp2);
        dp2 = dp1;
        dp1= curr;
    }
    return Math.min(dp1,dp2)
};
