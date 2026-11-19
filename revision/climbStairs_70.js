var climbStairs = function (n) {
    if (n <= 2) return n;

    let prev = 1;
    let curr = 2;

    for (i = 3; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next
    }
    return curr;
};
