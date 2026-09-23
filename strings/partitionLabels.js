
var partitionLabels = function (s) {
    let last = {};
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }
    let res = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]])

        if (i === end) {
            res.push(end - start + 1)
            start = i + 1;
        }
    }
    return res;
};
