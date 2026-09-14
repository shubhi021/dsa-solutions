var myPow = function (x, n) {
    let  exponent = n;
    if (exponent < 0) {
        x = 1 / x;
        exponent = - exponent;
    }
    let ans = 1;
    while (exponent > 0) {
        if (exponent % 2 === 1) {
            ans = ans * x;
        }
        x = x * x;
        exponent = Math.floor(exponent / 2)
    }
    return ans
};
