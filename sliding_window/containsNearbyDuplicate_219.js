var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    let n = nums.length;

    for (let i = 0; i <= n; i++) {
        if (map.has(nums[i])) {
            let diff = i - map.get(nums[i])
            if (diff <= k) {
                return true;
            }
        }
        map.set(nums[i], i)
    }
    return false;
};
