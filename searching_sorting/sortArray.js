var sortArray = function (nums) {
    function merge(left, right) {
        let res = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j])
                j++;
            }
        }
        while (i < left.length) {
            res.push(left[i]);
            i++;
        }

        while (j < right.length) {
            res.push(right[j]);
            j++;
        }
        return res;
    }
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2)
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right)

    }
    return mergeSort(nums);
};



/*
When LeetCode says:

Sort array
Don't use sort()
Need O(n log n)

Think:

Merge Sort

and remember the two functions:

merge(left, right)
mergeSort(arr)

That's the standard solution interviewers expect for this problem.
*/
