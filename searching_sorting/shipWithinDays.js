/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights); // Minimum possible capacity
    let right = weights.reduce((sum, w) => sum + w, 0); // Maximum possible capacity

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canShip(weights, days, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function canShip(weights, days, capacity) {
    let requiredDays = 1;
    let currentLoad = 0;

    for (let weight of weights) {
        if (currentLoad + weight > capacity) {
            requiredDays++;
            currentLoad = 0;
        }
        currentLoad += weight;
    }

    return requiredDays <= days;
}
