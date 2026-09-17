var trap = function (height) {
    let n = height.length;

    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    // Build left maximum array
    left[0] = height[0];

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    // Build right maximum array
    right[n - 1] = height[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    // Calculate trapped water
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += Math.min(left[i], right[i]) - height[i];
    }

    return sum;
};
