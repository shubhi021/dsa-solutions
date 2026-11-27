'use strict';

var totalFruit = function (fruits) {
    const basket = new Map();
    let left = 0;
    let best = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) basket.delete(leftFruit);
            left++;
        }

        best = Math.max(best, right - left + 1);
    }
    return best;
};
