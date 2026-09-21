
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        next = intervals[i];
        if (current[1] < next[0]) {
            res.push(current);
            current = next
        }
        else {
            current[1] = Math.max(current[1], next[1])
        }

    }
    res.push(current);
    return res;
};
