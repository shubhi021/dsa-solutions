// Problem: Capacity To Ship Packages Within D Days
// Difficulty: Medium
// Link: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days
// Approach: Binary Search on Answer
// Time: O(n log m) where n = weights length, m = sum of all weights
// Space: O(1)

var shipWithinDays = function(weights, days) {
    
    // Minimum capacity = heaviest single package (can't split packages)
    // Maximum capacity = sum of all packages (ship everything in 1 day)
    let left = Math.max(...weights);
    let right = weights.reduce((sum, w) => sum + w, 0);
    
    // Binary search on the answer (capacity)
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check: can we ship all packages within 'days' days
        // using 'mid' as our capacity?
        if (canShip(weights, days, mid)) {
            right = mid;  // mid works, try smaller capacity
        } else {
            left = mid + 1;  // mid doesn't work, need bigger capacity
        }
    }
    
    return left;  // minimum capacity that works
};


// Helper function — checks if given capacity can ship all packages in 'days' days
function canShip(weights, days, capacity) {
    
    let daysNeeded = 1;   // start with day 1
    let currentLoad = 0;  // current ship load
    
    for (let weight of weights) {
        
        // If adding this package exceeds capacity
        // ship current load and start a new day
        if (currentLoad + weight > capacity) {
            daysNeeded++;
            currentLoad = 0;
        }
        
        // Add package to current day's load
        currentLoad += weight;
    }
    
    // Return true if we shipped everything within allowed days
    return daysNeeded <= days;
}
