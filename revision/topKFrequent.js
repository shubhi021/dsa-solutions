var topKFrequent = function (nums, k) {
    let map = new Map();

    for (const num of nums) {
        map.set(num, ((map.get(num) || 0 ))+ 1);
    }
    const keys = [...map.keys()];
    keys.sort((a, b) => map.get(b) - map.get(a));

    return keys.slice(0, k);
};
