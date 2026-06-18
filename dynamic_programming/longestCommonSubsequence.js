var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length;
    let n = text2.length;

    const dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--)
        {
            if(text1[i] === text2[j])
            {
                dp[i][j] = 1+dp[i+1][j+1];
            }
            else{
                dp[i][j] = Math.max(dp[i][j+1],dp[i+1][j])
            }
        }
}
 return dp[0][0];
};
