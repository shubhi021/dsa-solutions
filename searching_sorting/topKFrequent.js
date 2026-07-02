
var topKFrequent = function (nums, k) {
    const map = {}

    //count frequency 

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    //convert to arrary
    let arr = Object.entries(map);

    //sort by frequency
    arr.sort((a, b) => b[1] - a[1]);
    //return k element

    return arr.slice(0, k).map((item) => Number (item[0]))
};
