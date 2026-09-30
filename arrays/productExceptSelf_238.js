var productExceptSelf = function (nums) {
    let res = new Array(nums.length).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProduct;
        leftProduct = leftProduct * nums[i]
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = rightProduct * res[i];
        rightProduct = rightProduct * nums[i];
    }
    return res;
};
