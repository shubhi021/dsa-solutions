
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => {
       return a[1] - b[1]
    })

    let count = 0;
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        if (current[0] < end) {
            count++;
        }
        else {
            end = current[1];
        }
    }
    return count;

};
