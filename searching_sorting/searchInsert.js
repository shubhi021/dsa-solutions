var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }

    }
    return left;
};
/*
Pattern to Remember
Normal Binary Search
return -1

if not found.

Search Insert Position
return left

if not found.

This is the foundation for many "first position", "lower bound", and "binary search on answer" problems.*/
