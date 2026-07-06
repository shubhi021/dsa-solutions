var threeSum = function(nums) {

    nums.sort((a, b) => a - b);

    let result = new Set();

    for (let i = 0; i < nums.length - 2; i++) {

        let seen = new Set();

        for (let j = i + 1; j < nums.length; j++) {

            let target = -(nums[i] + nums[j]);

            if (seen.has(target)) {
                result.add(`${nums[i]},${target},${nums[j]}`);
            }

            seen.add(nums[j]);
        }
    }

    return [...result].map(item => item.split(",").map(Number));
};
