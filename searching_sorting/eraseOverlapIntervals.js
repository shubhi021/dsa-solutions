var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let removals = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (start < prevEnd) {
            // overlap, remove this interval
            removals++;
        } else {
            // no overlap
            prevEnd = end;
        }
    }

    return removals;
};
