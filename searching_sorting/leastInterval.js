var leastInterval = function(tasks, n) {
    const count = new Map();

    for (let task of tasks) {
        count.set(task, (count.get(task) || 0) + 1);
    }

    let maxFreq = 0;

    for (let freq of count.values()) {
        maxFreq = Math.max(maxFreq, freq);
    }

    let maxCount = 0;

    for (let freq of count.values()) {
        if (freq === maxFreq) {
            maxCount++;
        }
    }

    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + maxCount
    );
};
