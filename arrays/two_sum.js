var twoSum = function (nums, target) {
    const map = new Map();
    for (i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};


/*## Hash Map (Map in JavaScript)

A Hash Map stores data in `key -> value` pairs for fast lookup.

```js
const map = new Map();
```

Common methods:

```js
map.set(key, value); // store
map.get(key);        // retrieve
map.has(key);        // check existence
```

Used in problems like Two Sum to reduce time complexity from `O(n²)` to `O(n)` by avoiding nested loops.
*/
