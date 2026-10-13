
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let word of wordDict) {
            if (i >= word.length) {
                if (dp[i - word.length]
                    && s.substring(i - word.length, i) === word
                ) {

                    dp[i] = true;
                    break;
                }

            }
        }
    }
    return dp[s.length]
};
