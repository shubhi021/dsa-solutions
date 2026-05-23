var maxSubArray = function(nums) {

    // currentSum = current subarray sum
    // maxSum = maximum sum found so far
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // Decide:
        // Start new subarray from current element
        // OR continue previous subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maxSum if currentSum is bigger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
