
var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)

        let result = guess(mid)

        if (result === 0) {
            return mid;
        } else if (result === -1) {
             right = mid - 1;
        }
        else {
             left = mid + 1;
        }
    }

};
