var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let required = sum - k;

        if (map.has(required)) {
            count += map.get(required)
        }
        map.set(sum,(map.get(sum)||0) + 1)
    }
    return count;
};
