var minEatingSpeed = function (piles, h) {
    //range
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let hours = 0;

        //no. of bananas per hour

        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        }
        // pass the range accordingly
        if (hours <= h) {
            right = mid;
        }
        else {
            left = mid + 1;
        }

    }
    return left;
};
