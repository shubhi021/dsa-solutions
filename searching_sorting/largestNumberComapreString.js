var largestNumber = function (nums) {
    nums = nums.map(String);

    nums.sort((a, b) => {
        let order1 = a + b;
        let order2 = b + a;

        return order2.localeCompare(order1)
    })

    if (nums[0] === '0') {
        return "0";
    }
    return nums.join("")
};
