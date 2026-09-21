var insert = function (intervals, newInterval) {
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
        }
        else if (intervals[i][0] > newInterval[1]) {
            res.push(newInterval)
            newInterval = intervals[i];
        }
        else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        }

    }
    res.push(newInterval)
    return res;
};
